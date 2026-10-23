import type { CommandDetails, DialogComponentKey } from "../types/commandTypes";

export const createDialogCommand = (componentKey: DialogComponentKey): CommandDetails => ({
  status: true,
  title: "",
  [componentKey]: {
    endStatus: true,
    script_entity_id: "",
    answerType: "default",
    forwardText: false,
    voiceCommands: [""],
    nextDirectControl: [{ uuid: "" }],
    voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
    nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "" }],
  },
});
