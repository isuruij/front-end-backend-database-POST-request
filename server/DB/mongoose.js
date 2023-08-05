
const mongoose = require("mongoose");
const monogdbURL =
  "mongodb+srv://94812277frtp:pass123@cluster0.wivhvg9.mongodb.net/database?retryWrites=true&w=majority";
mongoose.connect(monogdbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected!");
});