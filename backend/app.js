const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("👋 DevMate AI (SambaNova) backend is running!");
});

app.post('/generate', async (req, res) => {
  const { prompt: rawPrompt, language, taskType } = req.body;

  if (!rawPrompt || !language || !taskType) {
    return res.status(400).json({ code: "❌ Prompt, language, or taskType is missing." });
  }

  // 🧠 Build contextual instruction based on taskType
  let finalPrompt = "";
  switch (taskType) {
    case "code":
      finalPrompt = `Write clean and beginner-friendly ${language} code for: ${rawPrompt}`;
      break;
    case "explain":
      finalPrompt = `Explain the concept of '${rawPrompt}' in ${language}.`;
      break;
    case "complexity":
      finalPrompt = `What is the time and space complexity of '${rawPrompt}' in ${language}?`;
      break;
    case "convert":
      finalPrompt = `Convert the following logic to ${language}: ${rawPrompt}`;
      break;
    case "debug":
      finalPrompt = `Find and fix bugs in the following ${language} code or logic: ${rawPrompt}`;
      break;
    case "ask":
      finalPrompt = rawPrompt; // freeform question
      break;
    default:
      finalPrompt = rawPrompt;
  }

  try {
    const response = await axios.post(
      'https://api.sambanova.ai/v1/chat/completions',
      {
        stream: false,
        model: "DeepSeek-R1-0528",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for developers. Answer clearly, and include code when relevant."
          },
          {
            role: "user",
            content: finalPrompt
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.SAMBANOVA_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const generatedText = response.data.choices[0].message.content;
    res.json({ code: generatedText });

  } catch (error) {
    console.error("❌ SambaNova API Error:", error.response?.data || error.message);
    res.status(500).json({ code: "❌ Failed to get response from SambaNova API." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 DevMate AI (SambaNova) backend running at http://localhost:${PORT}`);
});
