import React, { useRef, useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export default function Scan() {
  const videoRef = useRef(null);

  const [emotion, setEmotion] = useState("");
  const [frequency, setFrequency] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [status, setStatus] = useState("Click Scan to start");

  useEffect(() => {
    const loadModels = async () => {
      setStatus("Loading models…");

      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      setStatus("Models loaded. Start Camera.");
    };

    loadModels();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setStatus("Camera running…");
    } catch {
      setStatus("Camera access denied.");
    }
  };

  const freqMap = {
    happy: 528,
    sad: 396,
    angry: 852,
    fearful: 417,
    disgusted: 285,
    surprised: 639,
    neutral: 432,
  };

  const playlistMap = {
    happy: [
      { title: "Feel good bollywood songs", url: "https://youtu.be/pIvf9bOPXIw?si=KBsKYkKPzqih-bGS" },
      { title: "Chill songs", url: "https://youtu.be/vakdDdP8hvw?si=sfm7aVqKgFK-SLJX" },
    ],
    sad: [
      { title: "Best sad songs", url: "https://youtube.com/playlist?list=PLHuHXHyLu7BGi-vR7X6j_xh_Tt9wy7pNA&si=y3cyTgdyPGGSxYKs" },
      
    ],
    angry: [
      { title: "Soft songs to stay calm", url: "https://youtu.be/FOA9iyxsW_A?si=36-NwSRbbVXveyVc" },
      
    ],
    neutral: [
      { title: "Soothing & Neutral vibes", url: "https://youtu.be/ZdFIOTWP4Og?si=PMvNU8Jg0llhRBjC" },
      
    ],
    surprised: [
      { title: "Chill out songs", url: "https://youtu.be/m70d24MiCPA?si=Ud_DCl9bz7X8m-wr" },
      
    ],
  };

  const detectEmotion = async () => {
    setStatus("Scanning…");

    const result = await faceapi
      .detectSingleFace(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (!result) {
      setStatus("No face detected.");
      return;
    }

    const expr = result.expressions;
    const bestEmotion = Object.keys(expr).reduce((a, b) =>
      expr[a] > expr[b] ? a : b
    );

    const freq = freqMap[bestEmotion] || 432;
    const list = playlistMap[bestEmotion] || playlistMap.neutral;

    setEmotion(bestEmotion);
    setFrequency(freq);
    setPlaylist(list);
    setStatus("Emotion detected!");

    // update context for therapy
    if (typeof window.updateAppSession === "function") {
      window.updateAppSession({
        emotion: bestEmotion,
        frequency: freq,
        playlist: list,
      });
    }

    // save to supabase
    await supabase.from("emotion_history").insert([
      {
        emotion: bestEmotion,
        frequency: freq,
        timestamp: new Date(),
        playlist: list,
      },
    ]);
  };

  return (
    <div className="pt-28 max-w-xl mx-auto px-5 text-center">
      <h1 className="text-3xl font-bold">Emotion Scanner</h1>
      <p className="text-purple-600 mt-2">{status}</p>

      <video ref={videoRef} className="w-full rounded-xl mt-4 shadow-lg" />

      <button
        onClick={startCamera}
        className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg shadow"
      >
        Start Camera
      </button>

      <button
        onClick={detectEmotion}
        className="mt-3 px-5 py-2 bg-green-600 text-white rounded-lg shadow"
      >
        Scan Emotion
      </button>

      {/* RESULT BOX — RESTORED */}
      {emotion && (
        <div className="mt-7 p-5 bg-white dark:bg-gray-800 rounded-xl shadow text-left">
          <h2 className="text-xl font-bold">
            Emotion: <span className="text-purple-500">{emotion}</span>
          </h2>

          <p className="text-green-600 font-semibold mt-2">
            Frequency: {frequency} Hz
          </p>

          <p className="mt-3 font-bold">Playlist:</p>
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

          {/* BUTTON TO GO TO THERAPY */}
          <Link to="/therapy">
            <button className="mt-5 px-5 py-2 bg-purple-600 text-white rounded-lg shadow w-full">
              Go to Therapy Page
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
