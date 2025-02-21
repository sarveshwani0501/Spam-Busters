const axios = require("axios");

async function translateText(text,lang) {
    try {
         const response = await axios.get("https://api.mymemory.translated.net/get",
          {
             params: {
                q: text,
                 langpair: `${lang}|en`, // any user language to English
             }
        });

        const translatedText = response.data.responseData.translatedText;
        console.log("Translated Text:", translatedText);
        return translatedText;
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        return null;
    }
}

translateText("Et pour parler de ce sommet de la francophonie de l'avenir de la langue française, Florence Test, enseignante en français langue étrangère à l'UFE Université de Montpellier, l'institut d'études françaises pour étudiants étrangers nous a rejoints sur ce plateau. Bonjour. Merci d'être avec nous. On vient de l'entendre dans ce reportage, passion rime avec vocation depuis vingt-cinq ans pour ce professeur de lycée de Phnom Penh. C'est votre cas aussi, vous êtes professeur depuis près de quarante ans. Oui, c'est ça. Je suis professeur de français de de français langue étrangère depuis effectivement très longtemps et c'est vrai que c'est un métier qu'on ne fait pas pour gagner beaucoup d'argent, c'est clair, mais parce que que ce soit moi ou tous mes collègues avec qui je travaille habituellement, on est tous là parce qu'on aime ça et le rapport avec les les étrangers, le rapport avec la langue française, c'est quelque chose d'un peu difficile à expliquer en fait.","fr");

module.exports = {translateText};