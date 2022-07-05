require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./configs/db");

app.use(express.json());
app.use("/", require("./services")())

app.listen(process.env.PORT || 3004, () => {
  console.log('server running on PORT 3004');
});
