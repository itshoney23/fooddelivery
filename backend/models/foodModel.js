import mongoose from "mongoose";

//food model properties
const foodSchema = new mongoose.Schema({
    name: {type:String,required:true}, // if we try to store data without name then it -> required true
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

const foodModel = mongoose.model.food || mongoose.model("food",foodSchema)

export default foodModel