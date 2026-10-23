import re


def normalize_token(token: str) -> str:
    return re.sub(r"^[^\w-]+|[^\w-]+$", "", token.lower(), flags=re.UNICODE)
