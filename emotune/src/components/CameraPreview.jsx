import React, { useRef, useEffect } from "react";

export default function CameraPreview({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        videoRef.current.play().catch(() => {});
      } catch (err) {
        alert("Camera access blocked.");
      }
    }

    startCamera();
    return () => {
      const tracks = videoRef.current?.srcObject?.getTracks();
      tracks?.forEach((t) => t.stop());
    };
  }, []);

  const capture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0);

    onCapture(canvas.toDataURL("image/jpeg"));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-[340px] h-[260px] rounded-xl overflow-hidden border shadow-xl">
        <video ref={videoRef} className="w-full h-full object-cover" />
      </div>

      <button
        onClick={capture}
        className="px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg"
      >
        🎯 Capture Emotion
      </button>

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}
