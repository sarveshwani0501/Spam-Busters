import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const Results = () => {
  const location = useLocation();
  const fileName = location.state?.fileName;
  const analysis = location.state?.analysis;
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="p-6 bg-gray-900 rounded-lg shadow-lg w-[600px] text-center">
        <h2 className="text-xl font-bold">Analysis Results</h2>
        <p className="text-gray-400">File: {fileName}</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">📜 Transcription</h3>
          <p className="bg-gray-800 p-3 rounded-lg text-gray-300">
            {analysis.transcription || "Processing..."}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            ⚠️ Detected Suspicious Keywords
          </h3>
          <p className="text-red-400">
            {analysis.keywords?.join(", ") || "None"}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">🛑 Risk Level</h3>
          <p
            className={`text-xl font-bold ${
              analysis.riskLevel === "High" ? "text-red-500" : "text-green-400"
            }`}
          >
            {analysis.riskLevel || "Unknown"}
          </p>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg mt-6 transition duration-300"
        >
          Analyze Another File
        </button>
      </div>
    </div>
  );
};
