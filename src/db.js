require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;

const connectionString = `mongodb+srv://${username}:${password}@${cluster}.sbwueo7.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
