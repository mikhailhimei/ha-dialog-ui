"""Characterization tests: preserve existing matching and priority rules."""
from copy import deepcopy

import pytest

from custom_components.ha_dialog_ui.src.service.matching.direct import (
    _direct_tokens_match,
    matches_direct_command,
)
from custom_components.ha_dialog_ui.src.service.matching.selection import (
    apply_main_command,
    build_child_candidates,
    find_matching_node_by_voice_command,
    find_top_level_candidates,
)
from custom_components.ha_dialog_ui.src.service.matching.ranking import (
    get_ranked_command_nodes,
)
from custom_components.ha_dialog_ui.src.service.matching.stream import (
    match_stream,
)
from custom_components.ha_dialog_ui.src.service.matching.templates import (
    match_template_command,
)
from custom_components.ha_dialog_ui.src.service.matching.text import (
    tokenize_template,
    tokenize_text,
    voice_command_matches,
)


@pytest.mark.parametrize(('pattern','text','partial','expected'), [
    ('стоп','стоп',False,True), ('стоп','стопка',False,False),
    ('стоп','стоп и включи свет',False,False), ('стоп','стоп и включи свет',True,True),
    ('останов(и|ить)','останови',False,True), ('останов(и|ить)','остановить',False,True),
    ('останов(и|ить)','останови и включи свет',False,False),
    ('привет ${name}','привет миша',False,False), ('','привет',False,False),
    ('[','[',False,True), (' ВКЛЮЧИ СВЕТ ','включи свет',False,True),
])
def test_strict_and_partial_voice_patterns(pattern,text,partial,expected):
    assert voice_command_matches(pattern,text,partial=partial) is expected


@pytest.mark.parametrize(('patterns','text','expected'), [
    (['привет ${name}'],'привет миша',{'name':'миша'}),
    (['включи ${device} в ${room}'],'включи свет в зале',{'device':'свет','room':'зале'}),
    (['поставь таймер на ${duration}'],'поставь таймер на 5 минут',{'duration':'5 минут'}),
    (['привет ${name}'],'добрый день',None),
])
def test_template_variable_boundaries(patterns,text,expected):
    assert match_template_command(patterns,text)==expected


@pytest.mark.parametrize(('value','pattern','expected'), [
    ('в зале','зал',True), ('зал','кухня',False), ('главный зал','зал',True),
    ('миша','миш(а|у)',True), ('мишень','миша',False), ('','зал',False),
])
def test_direct_values_keep_their_existing_matching_rules(value,pattern,expected):
    assert matches_direct_command(value,pattern) is expected


@pytest.mark.parametrize(('left','right','expected'), [
    ('свет','свет',True), ('светильник','свет',True), ('свет','светильник',True),
    ('до','дом',False), ('abcdx','abcdy',True), ('abcx','abcy',False),
])
def test_direct_token_length_rules(left,right,expected):
    assert _direct_tokens_match(left,right) is expected


@pytest.mark.parametrize(('pattern','text','expected'), [
    ('привет ${name}','привет миша',{'vars':['name'],'remaining':['миша']}),
    ('останов(и|ить)','останови',{'vars':[],'remaining':[]}),
    ('включи свет','останови и включи свет',{'vars':[],'remaining':[]}),
    ('останов(и|ить)','включи свет',None),
])
def test_stream_regex_and_slots(pattern,text,expected):
    tokens=tokenize_template(pattern)
    assert match_stream(tokens,tokenize_text(text),[tokens])==expected


@pytest.mark.parametrize('voice_commands',['привет',['привет']])
def test_string_and_list_voice_commands_keep_same_results(voice_commands):
    node={'id':'hello','uuid':'hello','voiceCommands':voice_commands}
    assert find_matching_node_by_voice_command([node],'привет')==(node,False,None)
    ranked=get_ranked_command_nodes('привет',[node])
    assert ranked[0]['id']=='hello'
    assert ranked[0]['_score']==1.0


def test_forward_text_is_only_used_after_specific_commands():
    exact={'id':'hello','voiceCommands':['привет']}
    forward={'id':'forward','voiceCommands':[],'forwardText':True}
    assert find_matching_node_by_voice_command([forward,exact],'привет')==(exact,False,None)
    assert find_matching_node_by_voice_command([exact,forward],'неизвестная фраза')==(forward,True,None)


@pytest.mark.parametrize(('kinds','expected'), [
    (['default','default'],0), (['default','script_response'],1),
    (['script_response','script_response'],0),
])
def test_main_command_preserves_priority_and_tie_order(kinds,expected):
    nodes=[{'uuid':str(index),'answerType':kind,'nextAction':[]}for index,kind in enumerate(kinds)]
    result=apply_main_command(nodes)
    assert [node['uuid']for node in result]==['0','1']
    assert [node['is_main_command']for node in result]==[expected==0,expected==1]


def test_default_dialog_branch_retains_priority_over_script():
    nodes=[{'uuid':'script','answerType':'script_response'},
           {'uuid':'branch','answerType':'default','nextAction':[{'uuid':'child'}]}]
    assert [node['is_main_command']for node in apply_main_command(nodes)]==[False,True]


@pytest.mark.parametrize(('text','expected'), [
    ('останови',[('stop',True)]), ('включи свет',[('light',True)]),
    ('останови и включи свет',[('stop',False),('light',True)]),
    ('стопка книг',[]),
])
def test_compound_commands_preserve_candidates_and_do_not_mutate_storage(text,expected):
    nodes=[{'uuid':'stop','actionType':'stop','voiceCommands':['стоп','останов(и|ить)'],'answerType':'default','nextAction':[]},
           {'uuid':'light','actionType':'light','voiceCommands':['включи свет'],'answerType':'script_response','nextAction':[]}]
    before=deepcopy(nodes)
    result=find_top_level_candidates(nodes,text)
    assert [(node['actionType'],node['is_main_command'])for node in result]==expected
    assert nodes==before


def test_child_reference_order_is_preserved_and_legacy_error_links_are_ignored():
    children=[{'uuid':'second'},{'uuid':'first'},{'uuid':'error'}]
    parent={'nextAction':[{'actionTypeComponent':'children','uuid':'first'},
                          {'actionTypeComponent':'children','uuid':'second'},
                          {'actionTypeComponent':'chidren_error','uuid':'error'}]}
    assert build_child_candidates(parent,children)==children[:2]
    parent['nextAction'].append({'actionTypeComponent':'children_error','uuid':'error'})
    assert build_child_candidates(parent,children)==children[:2]


@pytest.mark.parametrize('as_list', [True, False])
@pytest.mark.parametrize('text', ['спальне и коридоре', 'коридоре и спальне'])
def test_continuation_matches_semicolon_separated_patterns(as_list, text):
    phrases = 'коридор(е|и)? и спальн(е|ю|я)?;спальн(е|ю|я)? и коридор(е|и)?;спальне и коридоре'
    node = {'uuid': 'rooms', 'voiceCommands': [phrases] if as_list else phrases}
    before = deepcopy(node)
    matched, _, _ = find_matching_node_by_voice_command([node], text)
    assert matched is node
    assert node == before


def test_continuation_variants_do_not_change_priority_or_accept_extra_words():
    first = {'uuid': 'first', 'voiceCommands': [' ; спальн(е|ю|я)? и коридор(е|и)?;  ']}
    second = {'uuid': 'second', 'voiceCommands': ['спальне и коридоре']}
    assert find_matching_node_by_voice_command([first, second], 'спальне и коридоре')[0] is first
    assert find_matching_node_by_voice_command([first], 'спальне и коридоре лишнее')[0] is None
