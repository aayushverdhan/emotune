// src/pages/Settings.jsx
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { dark, setDark } = useTheme();
  const [name, setName] = useState(localStorage.getItem("emo_username") || "");

  const saveName = () => {
    localStorage.setItem("emo_username", name);
    alert("Name updated!");
  };

  const clearHistory = () => {
    localStorage.removeItem("emotune_sessions");
    window.location.reload();
  };

  return (
    <div className="py-10 max-w-2xl mx-auto space-y-10">

      {/* PROFILE */}
      <section className="p-6 bg-white dark:bg-[#1a1a24] rounded-3xl shadow space-y-4">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            className="w-20 h-20 rounded-full shadow"
            alt=""
          />

          <div>
            <h2 className="text-xl font-bold dark:text-white">
              Your Profile
            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Manage your basic info
            </p>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Your Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-3 border rounded-xl dark:bg-[#1a1a24] dark:text-white"
          />
        </div>

        <button
          onClick={saveName}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl"
        >
          Save
        </button>
      </section>

      {/* PREFERENCES */}
      <section className="p-6 bg-white dark:bg-[#1a1a24] rounded-3xl shadow space-y-4">
        <h2 className="text-xl font-bold dark:text-white">Preferences</h2>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
          <button
            onClick={() => setDark(!dark)}
            className={`px-5 py-2 rounded-full ${
              dark ? "bg-indigo-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {dark ? "ON" : "OFF"}
          </button>
        </div>
      </section>

      {/* CLEAR HISTORY */}
      <section className="p-6 bg-white dark:bg-[#1a1a24] rounded-3xl shadow">
        <h2 className="text-xl font-bold dark:text-white">App Data</h2>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Permanently remove all mood scans.
        </p>

        <button
          onClick={clearHistory}
          className="w-full mt-4 py-3 bg-red-500 text-white rounded-xl"
        >
          Clear History
        </button>
      </section>

      {/* ABOUT */}
      <section className="p-6 bg-white dark:bg-[#1a1a24] text-center rounded-3xl shadow">
        <h2 className="text-xl font-bold dark:text-white">About EmoTune</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          AI-powered emotional wellness app for music & frequency therapy.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
          Version 1.0.0
        </p>
      </section>
    </div>
  );
}
