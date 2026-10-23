export interface RecordSummary { uuid: string; title: string; }
export interface CollectionPage<T> {
  data: T[];
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
}
export interface CollectionResponse<T> extends Partial<CollectionPage<T>> { script_actions?: T[]; }
export interface RecordResponse<T> { data: T; }
export interface HassUser { is_admin: boolean; id?: string; }
export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: { friendly_name?: string; [key: string]: unknown };
}
export interface WebSocketMessage { type: string; [key: string]: unknown; }
export interface HassLike {
  user?: HassUser;
  connection: { sendMessagePromise<T = unknown>(message: WebSocketMessage): Promise<T>; };
  states: Record<string, HassEntity>;
}
export interface BrowseMediaItem {
  children?: BrowseMediaItem[];
  media_content_id?: string;
  title?: string;
  can_expand?: boolean;
  media_content_type?: string;
}
