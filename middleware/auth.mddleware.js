const jwt  = require("jsonwebtoken")
const dotenv = require("dotenv")


const auth = (req,res,next)=>{
   const token = req.headers.authorization?.split(" ")[1]
   if (!token){
      return res.status(500).json({msg:"user is not authorized"})
   }
     try {
     const decoded = jwt.verify(token,process.env.SECRETKEY)
   req.body.userId = decoded.userId
   next()

   } catch (error) {
      return res.status(401).json({ msg: "Invalid token" });
   }
}

module.exports ={auth}