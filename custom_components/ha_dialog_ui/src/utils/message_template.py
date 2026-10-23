import re


PLACEHOLDER_PATTERN = re.compile(r"\{([^{}]+)\}")


def render_message_template(response_payload, values):
    if not isinstance(response_payload, dict):
        return response_payload

    message = response_payload.get("message")
    if not isinstance(message, str) or not message:
        return response_payload

    template_values = {}

    if isinstance(values, dict):
        template_values.update(values)
    elif isinstance(values, list):
        for item in values:
            if isinstance(item, dict):
                template_values.update(item)

    def replace_placeholder(match):
        placeholder_name = match.group(1).strip()
        value = template_values.get(placeholder_name)
        if value is None:
            return match.group(0)
        return str(value)

    result = dict(response_payload)
    result["message"] = PLACEHOLDER_PATTERN.sub(replace_placeholder, message)
    return result
