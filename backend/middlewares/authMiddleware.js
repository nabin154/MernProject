const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async(req,res, next)=>{



    const token = req.header("Authorization");

    if(!token){
        return res.status(400).json("No token submitted");
    }

    const webToken = token.split(" ")[1];
    try {

        const isVerified = jwt.verify(webToken, process.env.JWT_SECRET_KEY);
        if(isVerified){
            req.user= isVerified;
             next();
        }
        else{
            return res.status(400).json("unauthorized token submitted");
        }
       
        
    } catch (error) {
        return res.status(400).json({msg:"error"});
    }
}
module.exports = protect;