import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js"

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

// ROUTES
app.use("/api/users", userRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
