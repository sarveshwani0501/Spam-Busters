require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;



async function transcribeAudio(filename,lang) {
     try {
        const audioStream = fs.createReadStream(filename);
            
        const response = await axios.post(
            `https://api.deepgram.com/v1/listen?model=general&tier=enhanced&language=${lang}&punctuate=true`,
            audioStream,
            {
                headers: {
                    "Authorization": `Token ${DEEPGRAM_API_KEY}`,
                    "Content-Type": "audio/mp3",  // Change based on your file type
                },
            }
        );

        const transcript =
            response?.data?.results?.channels?.[0]?.alternatives?.[0]?.transcript || "No transcription available";

        // Save transcription
        fs.appendFileSync("transcription.txt", transcript + "\n");

        // console.log("Transcription Saved: transcription.txt");
        // console.log("Transcription:", transcript);
        return transcript;
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        return null;
    }
}

// Run transcription
// transcribeAudio("./sample1.mp3");
module.exports = {transcribeAudio};