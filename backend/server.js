import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import User from "./models/user.model.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

// Test route
app.post("/api/users", async (req, res) => {
  const user = req.body;

  if (!user.firstName || !user.lastName || !user.email || !user.password) {
    return res.status(400).json({ success: false, message: "Please provide all fields"});
  }

  const newUser = new User(user)

  try {
    await newUser.save();
    res.status(201).json({ success: true, data: newUser});
  } catch (error) {
    console.error("Error in create user:", "Server Error");
    res.status(500).json({ success: false, message: "Server Error"});
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
