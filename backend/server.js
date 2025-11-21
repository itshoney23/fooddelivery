import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
// import userRouter from "./routes/userRoute.js"

//app config
const app = express()
const port = 4000
// port = 5000

//middleware
app.use(express.json())
app.use(cors())

//db connection 
connectDB();

//api end point
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads')) // if i add in in upld folder we can access img from this /images
// app.use("/api/user",userRouter)
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Honey Happy To say API Working")
})
app.get("/hikaro",(req,res)=>{
    res.send("Honey Happy To say API Working")
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


       