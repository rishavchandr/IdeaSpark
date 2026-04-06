import mongoose from "mongoose";
import { Idea } from "./idea.model.js";
import { analyzeStartupIdea } from "./idea.geminicontext.js";
import { aiAnalyticsPrompt } from "../utils/constant.js";
import { safeParseAIResponse } from "../utils/safeJsonParser.js";
import { ApiError } from "../utils/ApiError.js";

export const createIdeaAndAnalyze = async (userId, payload) => {
  const { title, description } = payload;

  if (!title || !description) {
    throw new ApiError(400, "title and description are required");
  }

  const prompt = aiAnalyticsPrompt(title, description);
  const aiResult = await analyzeStartupIdea(prompt);
  const parsed = safeParseAIResponse(aiResult.rawText);

  validateAIResponse(parsed);

  const savedIdea = await Idea.create({
    userId,
    title,
    summary: parsed.problem,
    customes: normalizeToArray(parsed.customer),
    market: normalizeToArray(parsed.market),
    techStack: parsed.tech_stack || [],
    riskLevel: parsed.risk_level,
    score: parsed.profitability_score,
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

const normalizeToArray = (value) => {
  if (Array.isArray(value)) return value;

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const validateAIResponse = (data) => {
  if (!data || typeof data !== "object") {
    throw new ApiError(500, "Invalid AI response format");
  }

  if (!data.problem) {
    throw new ApiError(500, "AI response missing problem");
  }

  if (!data.customer) {
    throw new ApiError(500, "AI response missing customer");
  }

  if (!data.market) {
    throw new ApiError(500, "AI response missing market");
  }

  if (
    !Array.isArray(data.tech_stack) ||
    data.tech_stack.length < 4 ||
    data.tech_stack.length > 6
  ) {
    throw new ApiError(500, "tech_stack must contain 4 to 6 items");
  }

  if (!["Low", "Medium", "High"].includes(data.risk_level)) {
    throw new ApiError(500, "risk_level must be Low, Medium, or High");
  }

  if (
    typeof data.profitability_score !== "number" ||
    data.profitability_score < 0 ||
    data.profitability_score > 100
  ) {
    throw new ApiError(500, "profitability_score must be between 0 and 100");
  }
};