import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer" // we can create the img storing system

const foodRouter = express.Router();

//logic that save img inn upload folder
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) //filename become unique
    }
})

//middlewear for handling file uploads
const upload = multer({storage:storage})

//route 
foodRouter.post("/add",upload.single("image"),addFood)  //to send the data on the server 
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter