const axios = require("axios");

// Example transcribed text (Replace with actual Deepgram output)
// const transcribedText = "Hello, this is a test transcription.";

async function sendTextToFastAPI(transcribedText) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/receive_text", {
            text: transcribedText
        });

        // console.log("Response from FastAPI:", response.data);
    } catch (error) {
        console.error(" Error:", error.response?.data || error.message);
    }
}

// sendText();


module.exports = {sendTextToFastAPI};

//start fast api server first and then start this one text will be sent automaytically.........