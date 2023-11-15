const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://zahraa985:<password>@cluster0.sbwueo7.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;
