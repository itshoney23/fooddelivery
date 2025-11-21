// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   try {
//     // ✅ Extract token properly
//     const authHeader = req.headers.token;
  
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.json({ success: false, message: "Not Authorized. Login Again" });
//     }

//     // ✅ Get the actual token (remove "Bearer ")
//     const token = authHeader.split(" ")[1];

//     // ✅ Verify token
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Decoded user id:", token_decode.id);

//     // ✅ Make sure req.body exists before adding userId
//     if (!req.body) req.body = {};
//     req.body.userId = token_decode.id;

//     next();
//   } catch (error) {
//     console.error("JWT Error:", error.message);
//     res.json({ success: false, message: "Invalid or expired token" });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken"

const authMiddleware = async(req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
         if (!req.body) req.body = {};
        req.body.userId = token_decode.id;
        next(); 
    }
    catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware;