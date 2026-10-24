const messages: Record<string, string> = {
  unauthorized: "Недостаточно прав. Войдите как администратор Home Assistant.",
  not_allowed: "Недостаточно прав. Войдите как администратор Home Assistant.",
  not_found: "Запись больше не существует. Обновите список.",
  timeout: "Home Assistant не ответил вовремя. Проверьте подключение и повторите загрузку.",
  connection_lost: "Соединение с Home Assistant потеряно. Проверьте подключение и повторите загрузку.",
  reload_failed: "Данные сохранены, но не удалось обновить интеграцию. Обновите список перед следующими изменениями.",
  import_failed: "Не удалось импортировать данные. Проверьте журнал Home Assistant и текущее состояние записей.",
  browse_media_failed: "Не удалось прочитать медиатеку Home Assistant. Проверьте раздел «Медиа» и настройку media_dirs.",
  unknown_error: "Ошибка на стороне Home Assistant. Подробности — в журнале сервера.",
  unknown_command: "Команда API недоступна. Обновите интеграцию и перезапустите Home Assistant.",
  invalid_format: "Некорректные данные запроса. Обновите страницу и проверьте введённые значения.",
  invalid_payload: "Некорректные данные запроса. Проверьте файл или введённые значения.",
};
export function formatApiError(error: unknown, fallback = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку."): string {
  if (error && typeof error === "object" && "code" in error && typeof error.code === "string") {
    if ((error.code === "call_error" || error.code === "monitor_error" || error.code === "whisper_prompt_error") && "message" in error && typeof error.message === "string") return error.message;
    return messages[error.code] ?? fallback;
  }
  if (error instanceof Error && /connection|network|fetch|disconnected/i.test(error.message)) {
    return messages.connection_lost;
  }
  return fallback;
}
