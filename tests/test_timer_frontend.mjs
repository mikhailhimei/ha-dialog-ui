import { test } from 'node:test';
import assert from 'node:assert/strict';
import { timerRemainingSeconds, timerTotalSeconds } from '../ui/src/utils/timerTime.ts';

const now = Date.parse('2026-10-12T09:00:00Z');

test('one hour remains one hour regardless of the browser timezone', () => {
  assert.equal(timerRemainingSeconds({date_end: '2026-10-12T12:00:00+02:00', total_seconds: 3600}, 'on', now), 3600);
  assert.equal(timerRemainingSeconds({date_end: '2026-10-12T13:00:00+03:00', total_seconds: 3600}, 'on', now), 3600);
  assert.equal(timerRemainingSeconds({date_end: '2026-10-12T10:00:00Z', total_seconds: 3600}, 'on', now), 3600);
});
test('legacy timestamps do not add the browser timezone to durations', () => {
  assert.equal(timerRemainingSeconds({date_end: '2026-10-12 12:00:00', count_timer: '01:00:00', remaining_seconds: 300}, 'on', now), 300);
  assert.equal(timerRemainingSeconds({date_end: '2026-10-12 12:00:00', count_timer: '01:00:00'}, 'on', now), 3600);
});
test('paused countdown uses its saved remainder and total stays independent', () => {
  const time = {date_end: '2026-10-12T13:00:00+03:00', total_seconds: 3600, remaining_seconds: 120};
  assert.equal(timerRemainingSeconds(time, 'paused', now), 120);
  assert.equal(timerRemainingSeconds(time, 'paused', now + 200_000), 120);
  assert.equal(timerTotalSeconds(time), 3600);
});
test('expired and invalid times are bounded without restarting', () => {
  assert.equal(timerRemainingSeconds({date_end: '2026-10-12T08:59:00Z', total_seconds: 60}, 'on', now), 0);
  assert.equal(timerRemainingSeconds({date_end: 'bad', count_timer: '00:01:00'}, 'on', now), 60);
  assert.equal(timerRemainingSeconds('00:01:00'), 60);
  assert.equal(timerTotalSeconds('01:00:00'), 3600);
});
