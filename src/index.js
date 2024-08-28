import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import { app } from "./app.js";



dotenv.config({
    path:'./env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at: ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("MONGODB CONNECTIONN FAILED: ",error)
})
















/*
const app = express()

;(async ()=>{

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.error("Error",error)
        throw err
        
    }

})()
*/