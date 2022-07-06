require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./configs/db");

app.use(express.json());
app.use("/", require("./services")(db))

app.listen(process.env.PORT || 3004, () => {
  console.info("> listening at: ", process.env.PORT);
});
