import mongoose from "mongoose";
import { Idea } from "./idea.model.js";
import { analyzeStartupIdea } from "./idea.geminicontext.js";
import { aiAnalyticsPrompt } from "../utils/constant.js";
import { safeParseAIResponse } from "../utils/safeJsonParser.js";
import { ApiError } from "../utils/ApiError.js";
import { normalizeAIResponse } from "../utils/normalizeAIResponse.js";

export const createIdeaAndAnalyze = async (userId, payload) => {
  const { title, description } = payload;

  if (!title || !description) {
    throw new ApiError(400, "title and description are required");
  }

  const prompt = aiAnalyticsPrompt(title, description);
  const aiResult = await analyzeStartupIdea(prompt);
  const parsed = safeParseAIResponse(aiResult.rawText);
  const normalized = normalizeAIResponse(parsed)
  validateAIResponse(parsed);

  const savedIdea = await Idea.create({
    userId,
    title,
    summary: normalized.summary,
    customers: normalized.customers,
    market: normalized.market,
    competitors: normalized.competitors,
    techStack: normalized.techStack,
    riskLevel: normalized.riskLevel,
    score: normalized.score
  });

  return savedIdea;
};

export const getAllIdeas = async (userId) => {
  return await Idea.find({ userId }).sort({ createdAt: -1 });
};

export const getIdeaById = async (userId, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid idea ID");
  }

  const idea = await Idea.findOne({ _id: id, userId });

  if (!idea) {
    throw new ApiError(404, "Idea not found");
  }

  return idea;
};

export const deleteIdea = async (userId, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid idea ID");
  }

  const deleted = await Idea.findOneAndDelete({ _id: id, userId });

  if (!deleted) {
    throw new ApiError(404, "Idea not found");
  }

  return deleted;
};

const validateAIResponse = (data) => {
  if (!data || typeof data !== "object") {
    throw new ApiError(500, "Invalid AI response format");
  }

  if (!data.summary || typeof data.summary !== "string") {
    throw new ApiError(500, "AI response missing summary");
  }

  if (!Array.isArray(data.customers) || data.customers.length < 2 || data.customers.length > 3) {
    throw new ApiError(500, "customers must contain 2 to 3 items");
  }

  if (!Array.isArray(data.market) || data.market.length < 2 || data.market.length > 3) {
    throw new ApiError(500, "market must contain 2 to 3 items");
  }

  if (!Array.isArray(data.competitors) || data.competitors.length < 2 || data.competitors.length > 3) {
    throw new ApiError(500, "competitors must contain 2 to 3 items");
  }

  for (const competitor of data.competitors) {
    if (!competitor.name || !competitor.differentiation) {
      throw new ApiError(500, "Each competitor must have name and differentiation");
    }
  }

  if (!Array.isArray(data.techStack) || data.techStack.length < 4 || data.techStack.length > 6) {
    throw new ApiError(500, "techStack must contain 4 to 6 items");
  }

  if (!["Low", "Medium", "High"].includes(data.riskLevel)) {
    throw new ApiError(500, "riskLevel must be Low, Medium, or High");
  }

  if (
    typeof data.score !== "number" ||
    data.score < 0 ||
    data.score > 100
  ) {
    throw new ApiError(500, "score must be between 0 and 100");
  }
};