const mongoose = require("mongoose");

//connection to DB
mongoose.connect("mongodb://localhost/todo");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to db"));

db.once("open", function () {
  console.log("Successfully connected to db");
});
