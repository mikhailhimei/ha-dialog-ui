export interface Reminder {
  id: string;
  text: string;
  device_id: string;
  at: string;
  status: "pending" | "delivering" | "completed" | "failed";
  error?: string;
}
export interface ReminderState {
  reminders: Reminder[];
  devices: { id: string; name: string }[];
}
