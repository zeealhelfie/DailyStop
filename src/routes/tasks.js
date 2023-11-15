const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("/Users/zahraaalshalal/Desktop/webDev/projects/toDo/my-TODO-app/src/models/User.js");

const router = express.Router();

// Middleware to check if the request has a valid token
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.user = user;
    next();
  });
};

// Protected route
router.get("/", authenticateToken, async (req, res) => {
  try {
    // Use req.user to get the user ID
    const userId = req.user.userId;

    // Fetch tasks associated with the user ID from the database
    // Example: const tasks = await Task.find({ userId });

    res.status(200).json({ message: "Protected route", userId });
  } catch (error) {
    console.error("Error in protected route:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
