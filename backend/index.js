const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/mainRouter")


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());



//MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error)=> console.error(error));

app.listen(PORT, () => console.log("server listening on port 😎", PORT));