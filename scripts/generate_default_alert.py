"""Generate the project's original, softly enveloped notification chime (no external assets)."""
import math
import struct
import wave
from pathlib import Path

RATE = 16000
DURATION = 12
TARGET = Path(__file__).resolve().parents[1] / "ui/public/sounds/default-alert.wav"


def main():
    samples = []
    for index in range(RATE * DURATION):
        t = index / RATE
        value = 0.0
        for group in range(8):
            for offset, frequency in ((0.0, 659.255), (0.32, 880.0)):
                age = t - group * 1.5 - offset
                if 0 <= age < 0.75:
                    envelope = min(age / 0.012, 1) * math.exp(-5 * age) * min((0.75 - age) / 0.08, 1)
                    value += 0.25 * envelope * (math.sin(2 * math.pi * frequency * age) + 0.18 * math.sin(2 * math.pi * frequency * 2 * age))
        samples.append(struct.pack("<h", round(max(-1, min(1, value)) * 32767)))
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(TARGET), "wb") as output:
        output.setnchannels(1)
        output.setsampwidth(2)
        output.setframerate(RATE)
        output.writeframes(b"".join(samples))


if __name__ == "__main__":
    main()
