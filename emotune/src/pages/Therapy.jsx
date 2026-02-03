import React, { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Therapy() {
  const { session } = useApp();
  const { emotion, frequency, playlist } = session;

  const [audioCtx, setAudioCtx] = useState(null);

  // Play frequency
  const playFrequency = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    oscillator.connect(ctx.destination);
    oscillator.start();

    setAudioCtx({ ctx, oscillator });
  };

  const stopFrequency = () => {
    if (audioCtx?.oscillator) {
      audioCtx.oscillator.stop();
    }
  };

  return (
    <div className="pt-28 max-w-xl mx-auto px-5">
      <h1 className="text-3xl font-bold text-center">Therapy Session</h1>

      {!emotion ? (
        <p className="text-center text-gray-500 mt-5">
          Scan emotion first from Scan page.
        </p>
      ) : (
        <div className="mt-7 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            Emotion: <span className="text-purple-600">{emotion}</span>
          </h2>

          <p className="text-green-600 font-semibold mt-2">
            Frequency: {frequency} Hz
          </p>

          <button
            onClick={playFrequency}
            className="mt-5 w-full py-2 bg-blue-600 text-white rounded-lg shadow"
          >
            ▶ Play Frequency
          </button>

          <button
            onClick={stopFrequency}
            className="mt-2 w-full py-2 bg-red-500 text-white rounded-lg shadow"
          >
            ⏹ Stop Frequency
          </button>

          <h3 className="text-lg font-bold mt-5">Recommended Songs</h3>

          {playlist.map((song, i) => (
            <a
              key={i}
              href={song.url}
              target="_blank"
              rel="noreferrer"
              className="block mt-1 text-blue-500 underline"
            >
              🎵 {song.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
