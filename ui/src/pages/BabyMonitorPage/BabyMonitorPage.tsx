import { useEffect, useRef, useState } from "react";
import { Baby, Circle, Headphones, Radio, Speaker } from "lucide-react";
import { useDialogApi } from "../../context/DialogContext";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { Modal } from "../../components/ui/Modal/Modal";
import { Button } from "../../components/ui/Button/Button";
import { SelectInput } from "../../components/ui/Select/SelectInput";
import { FieldHelp } from "../../components/ui/FieldLabel/FieldLabel";
import { useIsMobile } from "../../hooks/useIsMobile";
import { formatApiError } from "../../utils/apiErrors";
import { t } from "../../i18n";
import type { MonitorDevice, MonitorState } from "../../types/monitor";
import { MonitorAudio } from "./audio";
import { createMonitorViewId } from "../../utils/monitorViewId";
import styles from "./BabyMonitorPage.module.scss";

export function BabyMonitorPage() {
  const api = useDialogApi();
  const mobile = useIsMobile();
  const [state, setState] = useState<MonitorState>();
  const [error, setError] = useState("");
  const [sourceId, setSourceId] = useState<string | null>(null);
  const [target, setTarget] = useState("browser");
  const [busy, setBusy] = useState(false);
  const [connected, setConnected] = useState(false);
  const viewId = useRef("");
  const alive = useRef(false);
  const audio = useRef<MonitorAudio>();
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    alive.current = true;
    let active = true;
    let unsubscribe: (() => void | Promise<void>) | undefined;
    const id = createMonitorViewId();
    viewId.current = id;
    setState(undefined);
    setError("");
    void api
      .monitorWatch(id, (event) => {
        if (active) setState(event);
      })
      .then((stop) => {
        if (!active) void Promise.resolve(stop()).catch(() => {});
        else unsubscribe = stop;
      })
      .catch((reason) => {
        if (active)
          setError(
            formatApiError(
              reason,
              "Не удалось открыть радионяню. Проверьте подключение к HA.",
            ),
          );
      });
    return () => {
      active = false;
      alive.current = false;
      audio.current?.close();
      audio.current = undefined;
      // Unsubscribing closes the server-owned UI session, including pending starts.
      if (unsubscribe) void Promise.resolve(unsubscribe()).catch(() => {});
    };
  }, [api, attempt]);

  useEffect(() => {
    if (state && !state.owned_source_id && !busy) {
      audio.current?.close();
      audio.current = undefined;
      setConnected(false);
    }
  }, [state, busy]);

  const source = state?.devices.find((device) => device.id === sourceId);
  const sources = state?.devices.filter((device) => device.source) ?? [];
  const pair = state?.sessions.find(
    (session) => session.source_device_id === sourceId,
  );
  const active = Boolean(
    source?.transmitting || source?.source_state === "on" || pair,
  );
  const ownConnected =
    connected && source?.transmitting && state?.owned_source_id === sourceId;
  const playing = Boolean(pair) || ownConnected;
  const open = (device: MonitorDevice) => {
    const existing = state?.sessions.find(
      (session) => session.source_device_id === device.id,
    );
    setTarget(existing?.listener_device_id ?? "browser");
    setSourceId(device.id);
    setError("");
  };
  const close = () => setSourceId(null); // Deliberately does not stop audio or the HA session.
  const start = async () => {
    if (!source || busy) return;
    setBusy(true);
    setError("");
    setConnected(false);
    audio.current?.close();
    audio.current = undefined;
    let player: MonitorAudio | undefined;
    try {
      if (target === "browser") {
        player = new MonitorAudio();
        audio.current = player;
        await player.prepare(); // Within the click gesture for mobile audio autoplay policy.
      }
      const result = await api.monitorStart(
        viewId.current,
        source.id,
        target === "browser" ? undefined : target,
      );
      if (!alive.current || !result.started) {
        player?.close();
        return;
      }
      if (player)
        await player.listen(api, source.node_id, (value) => {
          if (alive.current) setConnected(value);
        });
      if (alive.current) {
        setConnected(true);
        setState((current) =>
          current
            ? {
                ...current,
                owned_source_id: source.id,
                devices: current.devices.map((device) =>
                  device.id === source.id
                    ? { ...device, transmitting: true, source_state: "on" }
                    : device,
                ),
                sessions:
                  target === "browser"
                    ? current.sessions
                    : [
                        ...current.sessions.filter(
                          (session) => session.source_device_id !== source.id,
                        ),
                        {
                          source_device_id: source.id,
                          listener_device_id: target,
                        },
                      ],
              }
            : current,
        );
      }
    } catch (reason) {
      player?.close();
      if (alive.current) {
        setError(
          formatApiError(
            reason,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения.",
          ),
        );
        // A browser audio failure must not leave a newly started microphone transmitting.
        try {
          await api.monitorStop(viewId.current, source.id);
        } catch {
          /* Retry remains available. */
        }
      }
    } finally {
      if (alive.current) setBusy(false);
    }
  };
  const stop = async (id: string) => {
    setBusy(true);
    setError("");
    try {
      await api.monitorStop(viewId.current, id);
      if (state?.owned_source_id === id) {
        audio.current?.close();
        audio.current = undefined;
        setConnected(false);
      }
      setState((current) =>
        current
          ? {
              ...current,
              owned_source_id:
                current.owned_source_id === id ? null : current.owned_source_id,
              devices: current.devices.map((device) =>
                device.id === id
                  ? { ...device, transmitting: false, source_state: "off" }
                  : device,
              ),
              sessions: current.sessions.filter(
                (session) =>
                  session.source_device_id !== id &&
                  session.listener_device_id !== id,
              ),
            }
          : current,
      );
    } catch (reason) {
      if (alive.current) setError(formatApiError(reason));
    } finally {
      if (alive.current) setBusy(false);
    }
  };

  const playbackDevices = state?.devices.filter(
    (device) => device.listener && device.id !== sourceId,
  ) ?? [];
  const selectedPlayback = playbackDevices.find((device) => device.id === target);
  const statusText = t(
    busy ? "Подключаемся…" : active
      ? ownConnected || pair ? "Прослушивание активно" : "Источник включён"
      : "Готово к запуску",
  );
  const controls = (
    <>
      <div className={styles.statusRow}>
        <div role="status" aria-live="polite"
          className={`${styles.status} ${active ? styles.live : ""}`}>
          <Circle size={12} fill="currentColor" />
          {statusText}
        </div>
        <FieldHelp label={statusText} description={t(
          active && state?.owned_source_id !== sourceId
            ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже."
            : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня».",
        )} />
      </div>
      <p className={styles.hint}>{t("Где воспроизводить звук?")}</p>
      <div className={styles.playback}>
        {target === "browser" ? <Headphones size={22} /> : <Speaker size={22} />}
        <SelectInput
          aria-label={t("Где воспроизводить звук?")}
          className={styles.playbackSelect}
          value={target}
          onChange={(event) => setTarget(event.target.value)}
          disabled={busy || playing}
          options={[
            { value: "browser", label: t("На этом устройстве") },
            ...playbackDevices.map((device) => ({
              value: device.id,
              label: device.online ? device.name : `${device.name} — ${t("Нет подключения")}`,
              disabled: !device.online,
            })),
          ]}
        />
        <small>{t(target === "browser" ? "Телефон или компьютер" : selectedPlayback?.online ? "Колонка" : "Нет подключения")}</small>
      </div>
      {playing && (
        <p className={styles.hint}>
          {t("Чтобы сменить устройство воспроизведения, сначала остановите сеанс.")}
        </p>
      )}
    </>
  );
  const footer = (
    <div className={styles.footer}>
      <Button
        onClick={active ? () => void stop(sourceId!) : () => void start()}
        disabled={
          busy ||
          (!active && !source?.online) ||
          (!active &&
            target !== "browser" &&
            !state?.devices.some(
              (device) => device.id === target && device.online,
            ))
        }
      >
        {t(
          busy
            ? "Подключаемся…"
            : active
              ? target === "browser" && !ownConnected && !pair
                ? "Начать слушать"
                : "Остановить"
              : "Старт",
        )}
      </Button>
    </div>
  );
  // Existing script-started sources can be attached to by pressing Start, not silently taken over.
  const startOrStopFooter =
    active && !playing ? (
      <div className={styles.footer}>
        <Button disabled={busy || !source?.online} onClick={() => void start()}>
          {t(target === "browser" ? "Начать слушать" : "Старт")}
        </Button>
        <Button
          variant="ghost"
          disabled={busy}
          onClick={() => void stop(sourceId!)}
        >
          {t("Остановить источник")}
        </Button>
      </div>
    ) : (
      footer
    );

  return (
    <>
      <div className={styles.navigation}><NavigationTabs /></div>
      {mobile && <MobileHeader title="Радионяня" />}
      <section className={styles.page}>
      <header className={styles.heading}>
        <Baby size={30} />
        <div>
          <h1>{t("Радионяня")}</h1>
          <p>
            {t("Выберите колонку, чтобы слышать, что происходит рядом с ней.")}
          </p>
        </div>
      </header>
      {error && !sourceId && (
        <div role="alert" className={styles.error}>
          {error}
          <Button onClick={() => setAttempt((value) => value + 1)}>
            {t("Повторить")}
          </Button>
        </div>
      )}
      {!state && !error && <p role="status">{t("Загрузка…")}</p>}
      {state && !state.available && (
        <div className={styles.empty}>
          {t(
            "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124.",
          )}
        </div>
      )}
      {state?.available && sources.length === 0 && (
        <div className={styles.empty}>
          {t(
            "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome.",
          )}
        </div>
      )}
      <div className={styles.grid}>
        {sources.map((device) => {
          const session = state?.sessions.find(
            (item) => item.source_device_id === device.id,
          );
          const listener = state?.devices.find(
            (item) => item.id === session?.listener_device_id,
          );
          return (
            <button
              key={device.id}
              className={`${styles.device} ${device.transmitting ? styles.deviceLive : ""}`}
              onClick={() => open(device)}
            >
              <Radio size={28} />
              <strong>{device.name}</strong>
              <span>
                {t(
                  !device.online
                    ? "Нет подключения"
                    : device.transmitting
                      ? "Источник включён"
                      : device.source_state === "on"
                        ? "Переподключение…"
                        : "Готова к прослушиванию",
                )}
              </span>
              {listener && (
                <small>
                  {t("Воспроизведение:")} {listener.name}
                </small>
              )}
            </button>
          );
        })}
      </div>
      <Modal
        open={sourceId !== null}
        onClose={close}
        title={source?.name ?? "Радионяня"}
        dialogLabel={source?.name ?? t("Радионяня")}
        footer={startOrStopFooter}
      >
        {error && (
          <p role="alert" className={styles.error}>
            {error}
          </p>
        )}
        {controls}
      </Modal>
      </section>
    </>
  );
}
