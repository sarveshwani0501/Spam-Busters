require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;
const filename = path.join(__dirname, "./WhatsApp Audio 2025-02-19 at 18.25.12_de8fc825.mp3"); // Replace with actual file


async function transcribeAudio(filename) {
    try {
        const audioData = fs.readFileSync(filename);

        const response = await axios.post(
            "https://api.deepgram.com/v1/listen",
            audioData,
            {
                headers: {
                    "Authorization": `Token ${DEEPGRAM_API_KEY}`,
                    "Content-Type": "audio/mp3",
                },
            }
        );

        const transcript = response.data.results.channels[0].alternatives[0].transcript;

        // Save the transcription
        fs.appendFileSync("transcription.txt", transcript);

        console.log("✅ Transcription Saved: transcription.txt");
        console.log("📜 Transcription:", transcript);
        //sendText(transcript);          //calls send text function to send transcribed text to fast api.............
    } catch (error) {
        console.error("❌ Error:", error.response?.data || error.message);
    }
}

// Run transcription
 transcribeAudio(filename);




 //to connect with fast api >>>....................................
// async function sendText(transcript) {
//     try {
//         const response = await axios.post("http://127.0.0.1:8000/receive_text", {
//             text: transcript
//         });

//         console.log("✅ Response from FastAPI:", response.data);
//     } catch (error) {
//         console.error("❌ Error:", error.response?.data || error.message);
//     }
// }

module.exports = {transcribeAudio};

