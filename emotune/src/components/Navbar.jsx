import React from "react";
import { Link } from "react-router-dom";
import { 
  SunIcon, 
  MoonIcon, 
  HomeIcon, 
  CameraIcon, 
  SparklesIcon,
  ClockIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/20 shadow">
      <div className="max-w-5xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Emotune
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6">

          <Link to="/" className="flex items-center gap-1 hover:text-purple-500 transition">
            <HomeIcon className="w-5 h-5" />
            Home
          </Link>

          <Link to="/scan" className="flex items-center gap-1 hover:text-purple-500 transition">
            <CameraIcon className="w-5 h-5" />
            Scan
          </Link>

          <Link to="/therapy" className="flex items-center gap-1 hover:text-purple-500 transition">
            <SparklesIcon className="w-5 h-5" />
            Therapy
          </Link>

          <Link to="/history" className="flex items-center gap-1 hover:text-purple-500 transition">
            <ClockIcon className="w-5 h-5" />
            History
          </Link>

          <Link to="/settings" className="flex items-center gap-1 hover:text-purple-500 transition">
            <Cog6ToothIcon className="w-5 h-5" />
            Settings
          </Link>

          {/* THEME TOGGLE */}
          <button onClick={toggleTheme}>
            {dark ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
