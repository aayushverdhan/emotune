import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Result from "./pages/Result";
import Therapy from "./pages/Therapy";
import History from "./pages/History";
import Settings from "./pages/Settings";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-[#0f0f17]">
            <Navbar />
            <main className="max-w-6xl mx-auto px-4">
              <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/result" element={<Result />} />
                <Route path="/therapy" element={<Therapy />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
}
