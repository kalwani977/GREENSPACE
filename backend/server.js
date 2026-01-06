import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/api/ai/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a plant care learning assistant. Give simple, safe advice. If unsure, suggest consulting an expert.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.4,
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (err) {
    res.status(500).json({ error: "AI failed to respond" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
