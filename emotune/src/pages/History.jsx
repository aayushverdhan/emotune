import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function History() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const { data, error } = await supabase
      .from("emotion_history")
      .select("*")
      .order("timestamp", { ascending: false });

    if (!error) setRecords(data);
  };

  return (
    <div className="pt-28 max-w-xl mx-auto px-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Scan History</h1>

      {records.length === 0 ? (
        <p className="text-gray-500 text-center">No history yet.</p>
      ) : (
        <div className="space-y-4">
          {records.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl shadow bg-white dark:bg-gray-800"
            >
              <p className="text-lg font-bold">
                Emotion: <span className="text-purple-500">{item.emotion}</span>
              </p>

              <p className="text-green-500 font-semibold">
                Frequency: {item.frequency} Hz
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {new Date(item.timestamp).toLocaleString()}
              </p>

              <p className="text-sm mt-2 font-semibold">Playlist:</p>
              {item.playlist?.map((song, i) => (
                <a
                  key={i}
                  href={song.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-blue-500 underline text-sm"
                >
                  🎵 {song.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
