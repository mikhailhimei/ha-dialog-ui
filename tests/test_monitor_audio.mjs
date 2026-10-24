import { test } from "node:test";
import assert from "node:assert/strict";
import { MonitorAudio } from "../ui/src/pages/BabyMonitorPage/audio.ts";

test("PCM playback is bounded and stopping rejects late audio", async () => {
  const buffers = [],
    sources = [];
  let callback,
    unsubscribed = 0,
    closed = 0;
  globalThis.AudioContext = class {
    currentTime = 1;
    destination = {};
    async resume() {}
    async close() {
      closed++;
    }
    createBuffer(channels, length, rate) {
      const data = new Float32Array(length);
      buffers.push(data);
      return { getChannelData: () => data, duration: length / rate };
    }
    createBufferSource() {
      const source = {
        connect() {},
        start(time) {
          this.time = time;
        },
        stop() {
          this.stopped = true;
        },
      };
      sources.push(source);
      return source;
    }
  };
  const audio = new MonitorAudio();
  await audio.prepare();
  await audio.listen(
    {
      async monitorAudio(node, cb) {
        assert.equal(node, "source");
        callback = cb;
        return () => {
          unsubscribed++;
        };
      },
    },
    "source",
    () => {},
  );
  callback({
    type: "audio",
    rate: 16000,
    pcm: Buffer.from([0, 128, 255, 127]).toString("base64"),
  });
  assert.deepEqual(Array.from(buffers[0]), [-1, 32767 / 32768]);
  assert.ok(sources[0].time >= 1.06);
  audio.close();
  assert.equal(sources[0].stopped, true);
  assert.equal(unsubscribed, 1);
  assert.equal(closed, 1);
  callback({ type: "audio", rate: 16000, pcm: "AAAA" });
  assert.equal(buffers.length, 1);
});

test("closing while the audio subscription is pending unsubscribes when it arrives", async () => {
  let release,
    unsubscribed = 0;
  globalThis.AudioContext = class {
    async resume() {}
    async close() {}
  };
  const audio = new MonitorAudio();
  await audio.prepare();
  const pending = audio.listen(
    {
      monitorAudio() {
        return new Promise((resolve) => {
          release = resolve;
        });
      },
    },
    "source",
    () => {},
  );
  audio.close();
  release(() => {
    unsubscribed++;
  });
  await pending;
  assert.equal(unsubscribed, 1);
});

test("view IDs work on HTTP without randomUUID and in older WebViews", async () => {
  const { createMonitorViewId } = await import(
    "../ui/src/utils/monitorViewId.ts"
  );
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, "crypto");
  try {
    Object.defineProperty(globalThis, "crypto", {
      configurable: true,
      value: {
        getRandomValues: globalThis.crypto.getRandomValues.bind(
          globalThis.crypto,
        ),
      },
    });
    assert.equal(globalThis.crypto.randomUUID, undefined);
    assert.equal(
      new Set(Array.from({ length: 100 }, createMonitorViewId)).size,
      100,
    );
    Object.defineProperty(globalThis, "crypto", {
      configurable: true,
      value: undefined,
    });
    assert.equal(
      new Set(Array.from({ length: 100 }, createMonitorViewId)).size,
      100,
    );
  } finally {
    Object.defineProperty(globalThis, "crypto", descriptor);
  }
});
