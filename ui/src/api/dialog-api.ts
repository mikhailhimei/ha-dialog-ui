import type { MusicOption, Settings } from "../types/scripts";
import type { BrowseMediaItem, CollectionResponse, HassLike, RecordResponse, RecordSummary } from "../types/api";
import type { CommandDetails, CommandSummary } from "../types/commandTypes";
export type { HassLike } from "../types/api";

export class DialogApi {
  callsWatch(callback: (event: import("../types/calls").CallsState) => void) {
    return this.monitorSubscribe(callback, { type: "ha_dialog_ui/calls/watch" });
  }
  callStart(source: string, target: string) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/start", source_device_id: source, target_device_id: target });
  }
  callAnswer(device: string) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/answer", device_id: device });
  }
  callEnd(device: string) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/end", device_id: device });
  }

  monitorWatch(viewId: string, callback: (event: import("../types/monitor").MonitorState) => void) {
    return this.monitorSubscribe(callback, { type: "ha_dialog_ui/monitor/watch", view_id: viewId });
  }
  monitorAudio(nodeId: string, callback: (event: import("../types/monitor").MonitorAudioEvent) => void) {
    return this.monitorSubscribe(callback, { type: "ha_dialog_ui/monitor/listen", node_id: nodeId });
  }
  private monitorSubscribe<T>(callback: (event: T) => void, message: import("../types/api").WebSocketMessage) {
    const connection = this.hass.connection;
    if (!connection.subscribeMessage) return Promise.reject(new Error("Подписки Home Assistant недоступны"));
    return connection.subscribeMessage(callback, message);
  }
  monitorStart(viewId: string, source: string, listener?: string) {
    return this.hass.connection.sendMessagePromise<{started: boolean}>({ type: "ha_dialog_ui/monitor/start", view_id: viewId, source_device_id: source, ...(listener ? {listener_device_id: listener} : {}) });
  }
  monitorStop(viewId: string, device: string) {
    return this.hass.connection.sendMessagePromise({type: "ha_dialog_ui/monitor/stop", view_id: viewId, device_id: device});
  }

  private hass: HassLike;

  constructor(hass: HassLike) {
    this.hass = hass;
  }

  setHass(hass: HassLike) {
    this.hass = hass;
  }

  getData<T>(commandType: string): Promise<T> {
    return this.hass.connection.sendMessagePromise<T>({ type: `ha_dialog_ui/${commandType}` });
  }

  async getSettings(): Promise<Settings> {
    const response = await this.getData<Settings | { result: Settings }>("get_settings");
    return "result" in response ? response.result : response;
  }

  async getPage<T = CommandSummary>(type: string, page?: number, pageSize?: number, query?: string) {
    const result =
      await this.hass.connection.sendMessagePromise<CollectionResponse<T>>({
        type: `ha_dialog_ui/${type}`,
        ...(page ? { page } : {}),
        ...(pageSize ? { page_size: pageSize } : {}),
        ...(query ? { query } : {}),
      });

    return result;
  }

  async getAllRecords<T = RecordSummary>(type: string, pageSize = 100) {
    const firstPage = await this.getPage<T>(type, 1, pageSize);
    const totalPages = firstPage?.total_pages ?? 1;
    const firstData = Array.isArray(firstPage?.data)
      ? firstPage.data
      : Array.isArray(firstPage?.script_actions)
        ? firstPage.script_actions
        : [];

    if (totalPages <= 1) {
      return firstData;
    }

    const restPages = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, index) =>
        this.getPage<T>(type, index + 2, pageSize),
      ),
    );

    return restPages.reduce((items: T[], page) => {
      const pageData = Array.isArray(page?.data)
        ? page.data
        : Array.isArray(page?.script_actions)
          ? page.script_actions
          : [];

      return [...items, ...pageData];
    }, firstData);
  }

  async getRecord<T = CommandDetails>(uuid: string, type: string) {
    return this.hass.connection.sendMessagePromise<RecordResponse<T>>({
      type: `ha_dialog_ui/${type}`,
      uuid,
    });
  }

  async saveData(data: unknown, type: string) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${type}`,
      data,
    });
  }

  async updateRecord(uuid: string, type: string, data: unknown) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${type}`,
      uuid,
      data,
    });
  }

  async updateRecordStatus(type: string, uuid: string, status: boolean) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${type}`,
      uuid,
      status,
    });
  }

  async searchAssistantCommands<T>(query: string, type: string) {
    return this.hass.connection.sendMessagePromise<{ data: T[] }>({
      type: `ha_dialog_ui/${type}`,
      query,
    });
  }

  async deleteRecord(uuid: string, type: string) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${type}`,
      uuid,
    });
  }

  getDevices() {
    return Object.values(this.hass.states)
      .filter((entity) => {
        const entityId = String(entity.entity_id || "");

        return (
          entityId.startsWith("media_player.") ||
          entityId.startsWith("speaker.")
        );
      })
      .map((entity) => ({
        id: entity.entity_id,
        name: entity.attributes?.friendly_name ?? entity.entity_id,
      }));
  }

  async getLocalMusicOptions(): Promise<MusicOption[]> {
    const audioExtensions = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i;
    const roots = [
      "media-source://media_source/local",
      "media-source://media_source",
    ];
    const visited = new Set<string>();
    const options = new Map<string, MusicOption>();
    const folderErrors: unknown[] = [];
    let rootLoaded = false;
    let rootError: unknown;

    const browse = async (mediaContentId: string) => {
      if (visited.has(mediaContentId)) return;

      visited.add(mediaContentId);

      const response = await this.hass.connection.sendMessagePromise<BrowseMediaItem>({
        type: "media_source/browse_media",
        media_content_id: mediaContentId,
      });

      const children = Array.isArray(response?.children) ? response.children : [];

      await Promise.all(children.map(async (item) => {
        const contentId = String(item?.media_content_id || "");
        const title = String(item?.title || contentId);

        if (!contentId) return;

        if (item?.can_expand) {
          try {
            await browse(contentId);
          } catch (error) {
            folderErrors.push(error);
          }
          return;
        }

        if (audioExtensions.test(title) || audioExtensions.test(contentId) || item?.media_content_type === "music" || item?.media_content_type?.startsWith("audio/")) {
          const localPrefix = "media-source://media_source/local/";
          const value = contentId.startsWith(localPrefix)
            ? contentId.slice(localPrefix.length)
            : contentId;

          options.set(value, {
            value,
            label: title,
          });
        }
      }));
    };

    for (const root of roots) {
      try {
        await browse(root);
        rootLoaded = true;
      } catch (error) {
        rootError = error;
      }
    }
    // An unreadable folder must not hide music from readable folders.
    // If nothing could be found, report the failure rather than an empty library.
    if (options.size === 0) {
      if (folderErrors.length > 0) throw folderErrors[0];
      if (!rootLoaded) throw rootError;
    }

    return Array.from(options.values()).sort((left, right) =>
      left.label.localeCompare(right.label),
    );
  }

  getScripts() {
    return Object.values(this.hass.states)
      .filter((entity) => entity.entity_id.startsWith("script."))
      .map((entity) => ({
        entity_id: entity.entity_id,
        name:
          entity.attributes?.friendly_name ??
          entity.entity_id,
      }));
  }

}
