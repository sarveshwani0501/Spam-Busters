import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file before submitting");
      return;
    }
    const formData = new FormData();

    formData.append("file", file);
    formData.append("phone", phone);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-gray-800">
      <form
        className="w-[500px]  p-6 rounded-xl shadow-lg border border-gray-200 bg-gradient-to-r from-cyan-400 to-blue-600"
        name="audioForm"
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-300 text-center">
          <label for="file-upload" className="cursor-pointer">
            <div className="flex flex-col items-center space-y-2">
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                📂 Choose files
              </button>
              <p className="text-gray-500 text-sm">
                or drag and drop your file here
              </p>
              <p className="text-xs text-gray-400">
                Supported Formats: WAV, MP3, MP4, AVI | Max size: 1GB
              </p>
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            name="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-600">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg mt-6 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default UploadForm;
