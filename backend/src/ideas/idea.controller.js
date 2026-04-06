import * as ideaService from "./idea.service.js";

export const createIdea = async (req, res) => {
  const userId = req.userId;

  const result = await ideaService.createIdeaAndAnalyze(userId, req.body);

  return res.status(201).json({
    success: true,
    message: "Idea analyzed and saved successfully",
    data: result,
  });
};

export const getAllIdeas = async (req, res) => {
  const userId = req.userId;

  const ideas = await ideaService.getAllIdeas(userId);

  return res.status(200).json({
    success: true,
    count: ideas.length,
    data: ideas,
  });
};

export const getIdeaById = async (req, res) => {
  const userId = req.userId;
  const { id } = req.params;

  const idea = await ideaService.getIdeaById(userId, id);

  return res.status(200).json({
    success: true,
    data: idea,
  });
};

export const deleteIdea = async (req, res) => {
  const userId = req.userId;
  const { id } = req.params;

  await ideaService.deleteIdea(userId, id);

  return res.status(200).json({
    success: true,
    message: "Idea deleted successfully",
  });
};