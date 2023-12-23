require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const app = express();
const authRoutes = require("./Routes/authRoutes");
const contactRoutes = require("./Routes/contactRoutes");
const connectDB = require("./utils/db");
const errorHandler = require("./middlewares/errorMiddleware")
const protect = require("./middlewares/authMiddleware");
const serviceRoutes = require("./Routes/serviceRoutes");

const corsOptions = {
  origin: "http://127.0.0.1/5173",
  methods:"GET,POST,PUT,GET,DELETE,PATCH",
}
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome to the main page");
});

app.use("/api/auth", authRoutes);
app.use("/api/form",protect, contactRoutes);
app.use("/api/service", serviceRoutes);
app.use(errorHandler);


const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`.yellow.bold);
  });
});
