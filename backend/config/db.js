//in this file logic of to connect databse

import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://Honey:9265@cluster0.ay4lrrk.mongodb.net/onlinefooddelivery')
    .then(()=>console.log("DataBabse Connected"));
}
//3.43.35