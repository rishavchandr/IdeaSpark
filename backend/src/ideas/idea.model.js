import mongoose from "mongoose";

const competitorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    differentiation: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const ideaSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true,
    },
    title: {
        type: String,
        required: true,
    },
    summary: {
       type: String,
    },
    customers: {
         type: [String],
    },
    market: {
        type: [String],
    },
    competitors: {
      type: [competitorSchema],
      default: [],
    },
    techStack: {
        type: [String],
    },
    riskLevel: {
        type: String,
    },
    score: {
        type: Number,
    }
},{timestamps: true})


export const Idea = mongoose.model('Idea',ideaSchema)