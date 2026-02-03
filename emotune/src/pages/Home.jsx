import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-gradient-to-b from-purple-500 to-blue-600 dark:from-gray-900 dark:to-black text-white">

      <h1 className="text-5xl font-extrabold drop-shadow-lg">
        Welcome to <span className="text-yellow-300">Emotune</span>
      </h1>

      <p className="mt-4 max-w-md text-lg opacity-90">
        Scan your face → Detect emotions → Get healing frequencies & Bollywood playlists to improve your mood naturally.
      </p>

      <Link
        to="/scan"
        className="mt-8 bg-white text-purple-600 px-10 py-3 rounded-full shadow-xl text-xl font-semibold hover:bg-gray-200 transition"
      >
        Start Scanning →
      </Link>

      {/* Cute mascot */}
     <img
  src={require("../assets/cat.png")}
  alt="Cute Cat"
  className="w-48 mt-10 animate-bounce drop-shadow-xl"
/>
    </div>
  );
}
