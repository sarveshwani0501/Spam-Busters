const axios = require("axios");

async function translateText(text, sourceLang, targetLang = "en") {
    try {
        const chunkSize = 200;
        let words = text.split(" ");
        let chunks = [];
        let currentChunk = "";

        for (let word of words) {
            if ((currentChunk + word).length > chunkSize) {
                chunks.push(currentChunk.trim());
                currentChunk = word + " ";
            } else {
                currentChunk += word + " ";
            }
        }
        if (currentChunk) chunks.push(currentChunk.trim());

        let translatedChunks = [];

        for (const chunk of chunks) {
            const response = await axios.get("https://api.mymemory.translated.net/get", {
                params: {
                    q: chunk,
                    langpair: `${sourceLang}|${targetLang}`,
                },
            });

            if (response.data && response.data.responseData) {
                translatedChunks.push(response.data.responseData.translatedText);
            }
        }
        console.log(translatedChunks.join(" "));
        return translatedChunks.join(" ");
    } catch (error) {
        console.error("Error:", error.message);
        return "Error in translation.";
    }
}


module.exports = {translateText};