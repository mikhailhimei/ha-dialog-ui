import assert from 'node:assert/strict';
import { test } from 'node:test';
import { formatApiError } from '../ui/src/utils/apiErrors.ts';

test('API failures have stable translated message keys without server internals',()=>{
  assert.match(formatApiError({code:'unauthorized',message:'server detail'}),/Недостаточно прав/);
  assert.match(formatApiError({code:'reload_failed'}),/^Данные сохранены/);
  assert.match(formatApiError(new TypeError('Failed to fetch')),/Соединение/);
  assert.equal(formatApiError(new Error('private traceback'),'Fallback'),'Fallback');
  assert.equal(formatApiError({code:'custom'},'Fallback'),'Fallback');
});

test('media and server failures are not reported as connection failures',()=>{
  assert.match(formatApiError({code:'browse_media_failed'}),/медиатеку/);
  assert.match(formatApiError({code:'unknown_error'}),/стороне Home Assistant/);
  assert.doesNotMatch(formatApiError({code:'unexpected'}),/подключение/);
});
