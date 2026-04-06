import { ApiError } from "./ApiError.js";

export const safeParseAIResponse = (rawText) => {
  try {
    return JSON.parse(rawText);
  } catch (error) {
    try {
      const cleaned = rawText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const firstBrace = cleaned.indexOf("{");
      const lastBrace = cleaned.lastIndexOf("}");

      if (firstBrace === -1 || lastBrace === -1) {
        throw new Error("No JSON object found");
      }

      const possibleJson = cleaned.slice(firstBrace, lastBrace + 1);
      return JSON.parse(possibleJson);
    } catch (err) {
      throw new ApiError(500, "Failed to parse AI JSON response");
    }
  }
};