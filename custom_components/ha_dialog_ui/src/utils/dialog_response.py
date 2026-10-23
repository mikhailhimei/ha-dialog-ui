from .message_template import render_message_template


def find_dialog_setting(settings, setting_type):
    for item in settings or []:
        if item.get("actionType") != setting_type:
            continue
        return dict(item)
    return None


def build_dialog_response(
    settings,
    setting_type,
    variables=None,
    fallback_message=""
):
    normalized_variables = variables or {}

    response_payload = find_dialog_setting(settings, setting_type)

    if not response_payload:
        if fallback_message:
            return {"message": fallback_message}
        return {}

    if "message" not in response_payload and response_payload.get("voiceResponse"):
        response_payload["message"] = response_payload["voiceResponse"]

    response_payload = render_message_template(response_payload, normalized_variables)

    if "message" not in response_payload or not response_payload["message"]:
        if fallback_message:
            response_payload["message"] = fallback_message
        else:
            response_payload.pop("message", None)

    response_payload['data'] = normalized_variables

    return response_payload
