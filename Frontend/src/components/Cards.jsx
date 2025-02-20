import React from "react";
import { Link } from "react-router-dom";
import audioImg from "../assets/audio.png";
import card from "../assets/cardBG.png";
import speechToText from "../assets/text-to-speech.png";
import risklevel from "../assets/speedometer.png";
import down from "../assets/pdfDownload.png";
import detection from "../assets/detection.png";
import bell from "../assets/bell.png";

export const Cards = () => {
  return (
    <div className="mx-12 mt-16 flex flex-wrap items-center justify-center gap-16 text-white">
      {/* Step 1: User Uploads Audio File */}
      <div
        className="flex min-h-[432px] w-full max-w-[350px] flex-col items-center justify-center gap-6 rounded-md p-4"
        style={{ backgroundImage: `url(${card})` }}
      >
        <div className="min-h-[50px] w-full max-w-[100px] flex items-center justify-center overflow-hidden">
          <img
            src={audioImg}
            alt="Upload Audio"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-h-[150px] w-full max-w-[250px]   p-2">
          <h2 className="text-center text-2xl font-bold drop-shadow-lg">
            User Uploads Audio File
          </h2>
          <p className="text-center pt-3">
            Click the ‘Select File’ button to upload a recording or drag & drop
            your file.
          </p>
        </div>
      </div>

      {/* Step 2: Speech-to-Text Conversion */}
      <div
        className="flex min-h-[432px] w-full max-w-[350px] flex-col items-center justify-center gap-6 rounded-md p-4"
        style={{ backgroundImage: `url(${card})` }}
      >
        <div className="min-h-[50px] w-full max-w-[120px] flex items-center justify-center overflow-hidden">
          <img
            src={speechToText}
            alt="Speech to Text"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-h-[150px] w-full max-w-[250px]   p-2">
          <h2 className="text-center text-2xl font-bold drop-shadow-lg">
            Speech-to-Text Conversion
          </h2>
          <p className="text-center pt-3">
            The system transcribes the uploaded audio into text for further
            processing.
          </p>
        </div>
      </div>

      {/* Step 3: Scam Detection Analysis */}
      <div
        className="flex min-h-[432px] w-full max-w-[350px] flex-col items-center justify-center gap-6 rounded-md p-4"
        style={{ backgroundImage: `url(${card})` }}
      >
        <div className="min-h-[50px] w-full max-w-[100px] flex items-center justify-center overflow-hidden">
          <img
            src={detection}
            alt="Scam Detection"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-h-[150px] w-full max-w-[250px]   p-2">
          <h2 className="text-center text-2xl font-bold drop-shadow-lg">
            Scam Detection Analysis
          </h2>
          <p className="text-center pt-3">
            AI scans the conversation for suspicious keywords, phrases, and
            patterns.
          </p>
        </div>
      </div>

      {/* Step 4: Risk Assessment & Explanation */}
      <div
        className="flex min-h-[432px] w-full max-w-[350px] flex-col items-center justify-center gap-6 rounded-md p-4"
        style={{ backgroundImage: `url(${card})` }}
      >
        <div className="min-h-[50px] w-full max-w-[100px] flex items-center justify-center overflow-hidden">
          <img
            src={risklevel}
            alt="Risk Assessment"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-h-[150px] w-full max-w-[250px]   p-2">
          <h2 className="text-center text-2xl font-bold drop-shadow-lg">
            Risk Assessment & Explanation
          </h2>
          <p className="text-center pt-3">
            The system categorizes the risk level and explains why the content
            was flagged.
          </p>
        </div>
      </div>

      {/* Step 5: User Alert & Action */}
      <div
        className="flex min-h-[432px] w-full max-w-[350px] flex-col items-center justify-center gap-6 rounded-md p-4"
        style={{ backgroundImage: `url(${card})` }}
      >
        <div className="min-h-[50px] w-full max-w-[100px] flex items-center justify-center overflow-hidden">
          <img
            src={bell}
            alt="User Alert"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-h-[150px] w-full max-w-[250px]   p-2">
          <h2 className="text-center text-2xl font-bold drop-shadow-lg">
            User Alert & Action
          </h2>
          <p className="text-center pt-3">
            Receive alerts if the call is suspicious and take necessary action.
          </p>
        </div>
      </div>

      {/* Step 6: Report Generation & Download */}
      <div
        className="flex min-h-[432px] w-full max-w-[350px] flex-col items-center justify-center gap-6 rounded-md p-4"
        style={{ backgroundImage: `url(${card})` }}
      >
        <div className="min-h-[50px] w-full max-w-[100px] flex items-center justify-center overflow-hidden bg-white rounded-full p-2">
          <img
            src={down}
            alt="Download Report"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-h-[150px] w-full max-w-[250px]  p-2">
          <h2 className="text-center text-2xl font-bold drop-shadow-lg">
            Report Generation & Download
          </h2>
          <p className="text-center pt-3">
            Download a detailed report of the analysis for future reference.
          </p>
        </div>
      </div>
    </div>
  );
};
