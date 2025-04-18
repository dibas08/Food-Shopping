import express from 'express'
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodModel from './models/foodModel.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'



// app config 
const app = express() 
const port = 4000

// middleware
app.use(express.json())
 app.use(cors())


 //db connections 
 connectDB()

 //api endpoints 

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)


 app.get("/",(req,res)=>{
    res.send("Api Working")
 })

 app.listen(port,()=>
{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://dibasshyamal:admin123@cluster0.i2qvz.mongodb.net/?