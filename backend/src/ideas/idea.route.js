import { Router } from "express";
import {
  createIdea,
  getAllIdeas,
  getIdeaById,
  deleteIdea,
} from "./idea.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { requiredUserId } from "./idea.middleware.js";

const router = Router();

router.use(requiredUserId);

router.post("/", asyncHandler(createIdea));
router.get("/", asyncHandler(getAllIdeas));
router.get("/:id", asyncHandler(getIdeaById));
router.delete("/:id", asyncHandler(deleteIdea));

export default router;