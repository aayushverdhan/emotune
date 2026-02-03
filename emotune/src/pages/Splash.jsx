// src/pages/Splash.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Splash() {
  const nav = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => nav("/home"), 1500);
    return () => clearTimeout(t);
  }, [nav]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 
        flex items-center justify-center text-4xl text-white font-bold shadow-xl"
      >
        E
      </motion.div>

      <h1 className="text-3xl font-extrabold mt-6 text-gray-800 dark:text-white">
        EmoTune
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
        Emotion-based music & frequency therapy.
      </p>
    </div>
  );
}
