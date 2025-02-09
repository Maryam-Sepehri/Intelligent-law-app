// Backend: server.js (Node.js + Express)
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/ask", async (req, res) => {
    const { query } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a legal assistant for Ontario law." },
                { role: "user", content: query }
            ],
        });
        res.json({ answer: response.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "Error processing request." });
    }
});

app.listen(5000, () => console.log("Backend running on port 5000"));