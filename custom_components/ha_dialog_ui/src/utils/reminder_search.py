"""Match meaningful reminder words regardless of Russian inflection."""
from functools import lru_cache
import re

from .text_normalization.inflections import _MORPH_ANALYZER

_IGNORED_POS = {'PREP', 'CONJ', 'PRCL', 'INTJ', 'NPRO'}
_IGNORED_WORDS = {
    'когда', 'где', 'куда', 'откуда', 'как', 'почему', 'зачем', 'сколько',
    'какой', 'который', 'что', 'кто', 'пожалуйста', 'напомнить', 'напоминать',
    'напоминание', 'быть',
}


@lru_cache(maxsize=4096)
def _word_lemma(word):
    parsed = _MORPH_ANALYZER.parse(word)[0]
    lemma = parsed.normal_form.replace('ё', 'е')
    if parsed.tag.POS in _IGNORED_POS or lemma in _IGNORED_WORDS:
        return None
    return lemma


def _words(text):
    return {lemma for word in re.findall(r'[^\W_]+', text.casefold())
            if (lemma := _word_lemma(word)) is not None}


def filter_reminders_by_query(items, query):
    words = _words(query)
    if not words:
        return []
    return [item for item in items if words.intersection(_words(item['text']))]
