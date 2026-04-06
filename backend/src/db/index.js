import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";

export const connectDB = async () => {
    try {
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MONGO DB is Connected!")
    } catch (error) {
        console.log("Error While connecting the Database" , error)
        process.exit(1)
    }
}