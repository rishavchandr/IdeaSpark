import {GoogleGenAI} from "@google/genai"
import {GEMINI_MODEL} from "../utils/constant.js"
import { ApiError } from "../utils/ApiError.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const gemini_model_for_test = "gemini-1.5-flash" 
  

const analyzeWithGemini = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
    });

    const text = response.text;
    return {
      provider: "gemini",
      model: GEMINI_MODEL,
      rawText: text,
    };
  } catch (error) {
    throw new ApiError(500, `Gemini API failed: ${error.message}`);
  }
};

export const analyzeStartupIdea = async (prompt) => {
  return analyzeWithGemini(prompt);
};