const express = require("express");
const router = express.Router();
const { upload } = require("./audioFile.js");
const { transcribeAudio } = require("./deepgramAPI.js");
const { sendTextToFastAPI } = require("./fastapi.js");
const { translateText } = require("./textTotextAPI.js");




// Enable CORS
const cors = require("cors");
router.use(cors());


console.log("post request arrived!!!!");



// Route: Handle File Upload & Transcription
router.post("/upload", upload.single("audioFile"), async (req, res) => {
  console.log(req.body);
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }

    try {
        // Transcribe audio file to text
        const userLangTranscript = await transcribeAudio(req.file.path, req.body.lang);
        console.log("User language transcripted text:", userLangTranscript);

        let engLangTranscript = userLangTranscript;
        if (req.body.lang !== "en") {
            // Translate text to English
            engLangTranscript = await translateText(userLangTranscript, req.body.lang);
        }

        console.log("English language transcripted text:", engLangTranscript);

        // Send text to FastAPI
        // sendTextToFastAPI(engLangTranscript);

        // Return response as JSON instead of rendering an EJS page
       return res.json({ userLangTranscript, engLangTranscript });
    } catch (error) {
        console.error("Error in transcription:", error);
        return res.status(500).json({ error: "Error processing audio file." });
    }
});

module.exports = router;
