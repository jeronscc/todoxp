import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

// Test route
app.get("/", (req, res) => {});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
