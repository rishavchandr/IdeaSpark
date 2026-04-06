import express from "express"
import cors from "cors"
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.CROS_ORIGIN
}))
app.use(errorHandler)

app.get('/api/v1/health' , (_,res) =>{
    res.status(200).json({
        message: "Sucess",
        uptime: process.uptime()
    })
})

import router from "./ideas/idea.route.js";
app.use('/api/v1/idea' , router);

export default app