from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.src.service import dialog_service


@pytest.mark.parametrize(('pattern','text','matches'), [
    ('стоп','стоп',True), ('стоп','стопка книг',False),
    ('останови','останови',True), ('останови','остановить',False),
    ('останов(и|ить)','останови',True), ('останов(и|ить)','остановить',True),
    ('останов(и|ить)','останови и включи свет',False),
    ('стоп','стоп и включи свет',False), ('','включи свет',False),
])
def test_standalone_stop_uses_strict_phrase_matching(pattern,text,matches):
    node={'actionType':'stop','voiceCommands':[pattern]}
    with (
        patch.object(dialog_service,'delete_dialog_state_value') as clear,
        patch.object(dialog_service,'publish_command_event') as send,
        patch.object(dialog_service,'get_voice_response',return_value='Остановлено'),
        patch.object(dialog_service,'build_text_response',return_value={'text':'Остановлено'}),
    ):
        result=dialog_service.handle_stop_command(object(),[node],text,'client','device')
    assert (result is not None) is matches
    assert clear.called is matches
    assert send.called is matches


@pytest.mark.parametrize('stop_phrase',['стоп','останов(и|ить)'])
async def test_combined_stop_and_light_reach_general_command_processing(stop_phrase):
    nodes=[
        {'uuid':'stop','actionType':'stop','voiceCommands':[stop_phrase],'answerType':'default','nextAction':[]},
        {'uuid':'light','actionType':'light','voiceCommands':['включи свет'],'answerType':'script_response','nextAction':[]},
    ]
    text=('стоп' if stop_phrase=='стоп' else 'останови')+' и включи свет'
    payload={'request':{'command':text},'session':{'new':True,'user':{'user_id':'client'},'application':{'application_id':'device'}}}
    with (
        patch.object(dialog_service,'get_current_hass',return_value=object()),
        patch.object(dialog_service,'prepare_dialog_nodes',return_value=(nodes,nodes)),
        patch.object(dialog_service,'get_dialog_settings_list',return_value=[]),
        patch.object(dialog_service,'delete_dialog_state_value') as clear,
        patch.object(dialog_service,'publish_command_event') as stop_send,
        patch.object(dialog_service,'execute_active_node',new_callable=AsyncMock,return_value=None),
        patch.object(dialog_service,'execute_top_level_command',new_callable=AsyncMock,return_value={'text':'Свет включён'}) as execute,
    ):
        result=await dialog_service.process_dialog_request(payload)
    assert result=={'text':'Свет включён'}
    clear.assert_not_called()
    stop_send.assert_not_called()
    execute.assert_awaited_once()
    args=execute.await_args.args
    assert args[1]['actionType']=='light'
    assert [item['parent_type'] for item in args[5]]==['stop','light']
