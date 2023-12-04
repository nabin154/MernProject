const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
});



userSchema.methods.comparePassword = async function (enteredPassword){

  return bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function(next){
  const user = this;

  if (!user.isModified('password'))
  {
   next();
  }

  try{
 const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(user.password, salt);
     user.password = hashed_password;
  }
  catch(error)
  {
    next(error);
  }

});

userSchema.methods.generateToken = async function (){

  try{
  return jwt.sign({
    id : this._id.toString(),
    email:this.email,
  },
  process.env.JWT_SECRET_KEY,
  {
    expiresIn:"30d",
  }
  );
}
catch(error)
{
  console.error(error);
}
}

const User = new mongoose.model("User", userSchema);

module.exports = User;
