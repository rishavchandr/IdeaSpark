import mongoose from "mongoose";

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