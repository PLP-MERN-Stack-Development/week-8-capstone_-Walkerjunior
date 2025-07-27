import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Database connection
mongoose.connect("mongodb://localhost:27017/agriconnect")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err))

// Routes
app.get("/", (req, res) => res.send("AgriConnect API"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
