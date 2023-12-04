const mongoose = require("mongoose");
const colors = require("colors");

const URI = process.env.MONGODB_URI;

const connectDB = async () =>{

    try {
     await mongoose.connect(URI); 
     console.log("MongoDb connected successfully.. !".blue.bold);
    } catch (error) {
       console.error("Failed to connect the database".red); 
    }
}


module.exports = connectDB;