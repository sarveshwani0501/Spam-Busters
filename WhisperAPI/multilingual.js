require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY; // Replace with your actual key
const AUDIO_FILE_PATH = path.join(__dirname, "sample5.mp3"); // Change as needed

async function transcribeAudio() {
    try {
        const fileStream = fs.createReadStream(AUDIO_FILE_PATH);

        const response = await axios.post(
            "https://api.deepgram.com/v1/listen?model=whisper-large&language=en", // Auto-detect language
            fileStream,
            {
                headers: {
                    "Authorization": `Token ${DEEPGRAM_API_KEY}`,
                    "Content-Type": "audio/mp3",
                }
            }
        );

        const transcription = response.data.results.channels[0].alternatives[0].transcript;
        console.log("📝 Transcribed Text:", transcription);
        return transcription;
    } catch (error) {
        console.error("❌ Error in transcription:", error.response?.data || error.message);
    }
}
transcribeAudio();

