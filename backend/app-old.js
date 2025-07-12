const express = require('express');
const cors = require('cors');
require('dotenv').config();

const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("👋 DevMate AI backend is running!");
});

app.post('/generate', async (req, res) => {
  const { prompt, language } = req.body;

  if (!prompt || !language) {
    return res.status(400).json({ code: "❌ Prompt or language missing." });
  }

  try {
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Give me ${language} code for this topic: ${prompt}. Keep it beginner-friendly and clean.`,
        },
      ],
      temperature: 0.2,
    });

    const generatedCode = gptResponse.choices[0].message.content;
    res.json({ code: generatedCode });

  }  catch (error) {
    if (error.response) {
      console.error("❌ OpenAI API error:", error.response.status);
      console.error("❌ Error details:", error.response.data);
      res.status(500).json({ code: "❌ " + error.response.data.error.message });
    } else {
      console.error("❌ OpenAI request failed:", error.message);
      res.status(500).json({ code: "❌ OpenAI request failed." });
    }
  }

});

app.listen(PORT, () => {
  console.log(`🚀 DevMate AI backend running at http://localhost:${PORT}`);
});
