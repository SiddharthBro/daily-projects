const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import User model
const User = require("./models/User");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test API
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// --------------------
// ADD USER API (POST)
// --------------------
app.post("/add-user", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
    });

    await user.save();
    res.send("User saved successfully");
  } catch (error) {
    res.status(500).send("Error saving user");
  }
});

// --------------------
// GET USERS API (GET)
// --------------------
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
