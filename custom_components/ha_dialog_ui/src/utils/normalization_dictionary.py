import json
from pathlib import Path
from functools import lru_cache

_WORDS_PATH = Path(__file__).resolve().parents[1] / "data" / "text_normalize_words.json"


@lru_cache(maxsize=1)
def load_normalization_dictionary():
    with _WORDS_PATH.open(encoding="utf-8") as dictionary_file:
        return json.load(dictionary_file)


def get_section(section_name: str):
    dictionary = load_normalization_dictionary()

    if section_name not in dictionary:
        raise KeyError(f"Unknown section: {section_name}")

    return dictionary[section_name]

def get_subsection(section_name: str, subsection_name: str):
    """
    Получить вложенный ключ (2 уровня максимум)
    """
    dictionary = load_normalization_dictionary()

    if section_name not in dictionary:
        raise KeyError(f"Unknown section: {section_name}")

    subsection = dictionary[section_name]

    if not isinstance(subsection, dict):
        raise TypeError(f"Section '{section_name}' is not a dict")

    if subsection_name not in subsection:
        raise KeyError(f"Unknown key '{subsection_name}' in section '{section_name}'")

    return subsection[subsection_name]