const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

// Serve the index.html for all routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Route for handling signup
app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Your signup logic here

  res.json({ message: "Signup successful" });
});

// Route for handling login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Your login logic here

  res.json({ message: "Login successful" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
