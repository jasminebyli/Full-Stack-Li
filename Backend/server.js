import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
})

app.get("/", (req, res) =>{
    res.send("hello world");
});

app.post("/chat", async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        res.json({
            response: response.text,
        });

    } catch(error){
        console.error(error);

        res.status(500).json({
            error: "Failed lol",
        });
    }
});

app.listen(port, () =>{
    console.log("Server is running at port " + port);

});
