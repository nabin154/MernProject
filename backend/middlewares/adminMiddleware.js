const User = require("../models/userModel");



const adminValidator = async (req, res, next)=>{
try {

const user = await User.findOne({email: req.user.email});
console.log(user);

if (user.isAdmin)
{
   next();
}
else{
    return res.status(400).json({ msg: "Unauthorized ! user is not admin." });
}
    
} catch (error) {
    return res.status(400).json({msg:"Internal error occured !"});
}
}


module.exports = { adminValidator };