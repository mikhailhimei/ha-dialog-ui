import pymorphy3
from num2words import num2words

_MORPH_ANALYZER = pymorphy3.MorphAnalyzer()


def number_noun_form(number: int) -> set[str]:
    number = abs(number)

    if number % 10 == 1 and number % 100 != 11:
        return {"sing", "nomn"}
    if 2 <= number % 10 <= 4 and not (12 <= number % 100 <= 14):
        return {"sing", "gent"}
    return {"plur", "gent"}


def inflect_number_text(number_text: str, grammatical_case: str) -> str:
    result = []

    for word in number_text.split():
        parsed_word = _MORPH_ANALYZER.parse(word)[0]
        inflected = parsed_word.inflect({grammatical_case})
        result.append(inflected.word if inflected else word)

    return " ".join(result)


def inflect_word(word: str, grammemes: set[str]) -> str:
    parsed_word = _MORPH_ANALYZER.parse(word)[0]
    inflected = parsed_word.inflect(grammemes)

    return inflected.word if inflected else word


def _number_text_for_noun_gender(number: int, parsed_word) -> str:
    gender = {"masc": "m", "femn": "f", "neut": "n"}.get(parsed_word.tag.gender, "m")
    return num2words(number, lang="ru", gender=gender)


def number_with_noun(number: int, word: str, number_case: str | None = None) -> str:
    parsed_word = _MORPH_ANALYZER.parse(word)[0]

    number_text = _number_text_for_noun_gender(number, parsed_word)
    if number_case:
        number_text = inflect_number_text(number_text, number_case)

    inflected = parsed_word.inflect(number_noun_form(number))
    word_form = inflected.word if inflected else word

    return f"{number_text} {word_form}"


def number_with_noun_in_genitive(number: int, word: str) -> str:
    parsed_word = _MORPH_ANALYZER.parse(word)[0]

    number_text = inflect_number_text(_number_text_for_noun_gender(number, parsed_word), "gent")
    singular = abs(number) % 10 == 1 and abs(number) % 100 != 11
    noun = parsed_word.inflect({"sing" if singular else "plur", "gent"})
    word_form = noun.word if noun else word

    return f"{number_text} {word_form}"
