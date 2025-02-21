import React, { useState, useEffect } from "react";
import axios from "axios";


const Services = () => {
  const [data, setData] = useState({ userLangTranscript: "", engLangTranscript: "" });
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [lang, setLang] = useState("en"); // Default language
  const [phone, setPhone] = useState("");

  // Fetch transcripts when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/spamsnipper/upload") // Ensure this matches your backend endpoint
      .then((response) => {
        setData({
          userLangTranscript: response.data.userLangTranscript || "No Data",
          engLangTranscript: response.data.engLangTranscript || "No Data",
        });
      })
      .catch((err) => {
        setError("Something went wrong!");
        console.error(err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form refresh

    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("audioFile", file); // Match backend name
    formData.append("lang", lang); // Match backend name
    formData.append("phone", phone); // Match backend name

    try {
      const response = await fetch("http://localhost:5000/spamsnipper/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok) {
        alert("File uploaded and processed successfully!");
        setData({
          userLangTranscript: result.userLangTranscript || "No Data",
          engLangTranscript: result.engLangTranscript || "No Data",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-gray-800">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] p-6 rounded-xl shadow-lg border border-gray-200 bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        {/* File Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-300 text-center">
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="flex flex-col items-center space-y-2">
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                📂 Choose File
              </button>
              <p className="text-gray-500 text-sm">or drag and drop your file here</p>
              <p className="text-xs text-gray-400">
                Supported Formats: WAV, MP3, MP4, AVI | Max size: 1GB
              </p>
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            name="audioFile"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* Language Selection */}    
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-600">Select Language</label>
          <select
            name="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ta">Tamil</option>
            <option value="zh">Chinese</option>
          </select>
        </div>

        {/* Phone Number Input */}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-600">Phone Number (Optional)</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg mt-6 transition duration-300"
        >
          Submit


        </button>

        {/* Display fetched data */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Transcripts</h2>
          {/* {error && <p className="text-red-500">{error}</p>} */}
          <p><strong>User Language Transcript:</strong> {data.userLangTranscript}</p>
          <p><strong>English Transcript:</strong> {data.engLangTranscript}</p>
        </div>
      </form>
    </div>
  );
};

export default Services;
