const express = require("express");
const app = express();
const db = require("./config/mongoose");
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./Routes/index.js"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
