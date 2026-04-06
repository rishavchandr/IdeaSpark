import "dotenv/config"

import app from './src/app.js'
import { connectDB } from "./src/db/index.js"

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT , () =>{
    console.log(`Server is running at port: ${PORT}`)
})

