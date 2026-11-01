"""Generate an original short two-note reminder chime (mono PCM WAV)."""
import math
from pathlib import Path
import struct
import wave

RATE = 24000
TARGET = Path(__file__).resolve().parents[1] / 'custom_components/ha_dialog_ui/static/sounds/reminder-chime.wav'


def generate():
    frames = bytearray()
    for index in range(int(RATE * 0.6)):
        time = index / RATE
        start, frequency = (0.0, 660) if time < 0.24 else (0.24, 880)
        elapsed = time - start
        envelope = min(1.0, elapsed / 0.008) * math.exp(-elapsed * 13)
        end = 0.24 if time < 0.24 else 0.6
        envelope *= min(1.0, (end - time) / 0.012)
        value = 0.3 * envelope * math.sin(2 * math.pi * frequency * elapsed)
        frames.extend(struct.pack('<h', round(value * 32767)))
    with wave.open(str(TARGET), 'wb') as output:
        output.setparams((1, 2, RATE, 0, 'NONE', 'not compressed'))
        output.writeframes(frames)


if __name__ == '__main__':
    generate()
