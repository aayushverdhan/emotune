// src/pages/Result.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Result() {
  const { session } = useApp();

  if (!session)
    return (
      <div className="py-20 text-center">
        <p>No session found.</p>
        <Link to="/scan" className="text-indigo-600 underline">
          Scan Again
        </Link>
      </div>
    );

  return (
    <div className="py-10 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold dark:text-white">Emotion Result</h1>

      <img
        src={session.img}
        alt=""
        className="w-64 rounded-xl border shadow"
      />

      <div className="px-6 py-3 text-white text-xl rounded-full shadow 
      bg-gradient-to-r from-indigo-500 to-purple-600">
        {session.emotion}
      </div>

      <Link
        to="/therapy"
        className="px-8 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700"
      >
        🎧 Start Therapy
      </Link>
    </div>
  );
}
