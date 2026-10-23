"""Timer-selection checks runnable without a Home Assistant installation."""

import importlib.util
from pathlib import Path
import unittest

PATH = Path(__file__).resolve().parents[1] / "custom_components/ha_dialog_ui/timer_alarm/timer_display.py"
SPEC = importlib.util.spec_from_file_location("timer_display", PATH)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


def timer(timer_id, created, device="voice", remaining=30, total=60, status="on"):
    return {"id": timer_id, "deviceId": device, "status": status,
            "time": {"created_at": created, "remaining_seconds": remaining,
                     "total_seconds": total}}


class TimerDisplayTests(unittest.TestCase):
    def test_newest_not_shortest_or_uuid_order(self):
        result = MODULE.latest_device_timers([
            timer("zzz", 10, remaining=1), timer("aaa", 20, remaining=100, total=120)])
        self.assertEqual(result["voice"]["id"], "aaa")
        self.assertEqual(result["voice"]["total_seconds"], 120)

    def test_devices_are_independent(self):
        result = MODULE.latest_device_timers([timer("one", 10), timer("two", 20, "other")])
        self.assertEqual(result["voice"]["id"], "one")
        self.assertEqual(result["other"]["id"], "two")

    def test_paused_latest_keeps_progress(self):
        result = MODULE.latest_device_timers([timer("old", 10), timer("new", 20, status="paused")])
        self.assertTrue(result["voice"]["paused"])
        self.assertEqual(result["voice"]["remaining_seconds"], 30)

    def test_expired_latest_falls_back_to_remaining_timer(self):
        result = MODULE.latest_device_timers([timer("old", 10), timer("new", 20, remaining=0)])
        self.assertEqual(result["voice"]["id"], "old")

    def test_empty_or_unassigned_does_not_activate_any_ring(self):
        self.assertEqual(MODULE.latest_device_timers([]), {})
        self.assertEqual(MODULE.latest_device_timers([timer("new", 20, device="")]), {})


if __name__ == "__main__":
    unittest.main()
