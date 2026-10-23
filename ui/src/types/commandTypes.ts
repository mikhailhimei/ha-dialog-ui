import type { CollectionPage } from "./api";

export interface VoiceResponse { actionType: string; voiceResponse: string; }
export interface NextAction { actionTypeComponent: string; actionType: string; uuid: string; title?: string; }
export interface DirectCommandLink { uuid: string; actionType?: string; title?: string; mappingType?: string; }
export interface SubDirectControlItem {
  id?: number;
  subMappingType: string | null;
  title?: string | null;
  subVoiceCommands: string[] | string | null;
}
export interface CommandSummary { uuid: string; title: string; status?: boolean; actionType?: string; }
export type CommandPage = CollectionPage<CommandSummary>;
export interface ComponentDialog {
  script_entity_id?: string;
  endStatus: boolean;
  actionType?: string;
  answerType: string;
  forwardText?: boolean;
  voiceCommands: string[] | string | null;
  nextDirectControl: DirectCommandLink[];
  voiceResponseArray: VoiceResponse[];
  nextAction: NextAction[];
}
export type DialogComponentKey = "componentDialog" | "subComponentDialog";
export type DialogArrayKey = "nextDirectControl" | "voiceResponseArray" | "nextAction";
export interface DirectControl {
  mappingType: string;
  valueType: string;
  voiceCommands?: string[] | null;
  manual: boolean;
  subDirectControl: string | SubDirectControlItem[];
  subDirectControlTitle?: string;
}
export interface CommandDetails {
  voiceResponseArray?: VoiceResponse[];
  script_entity_id?: string;
  status?: boolean;
  title: string;
  uuid?: string;
  componentDialog?: ComponentDialog;
  subComponentDialog?: ComponentDialog;
  directControl?: DirectControl;
  subDirectControl?: SubDirectControlItem[];
  actionType?: string;
  message?: string | null;
  endStatus?: boolean;
  forwardCommandToServer?: boolean;
  voiceResponse?: string;
}
