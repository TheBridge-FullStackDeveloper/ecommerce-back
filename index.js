require('dotenv').config();
const express = require('express');
const app = express();


app.use("/", require("./services")(db));

app.listen(process.env.PORT || 3000, () => {
  console.log('server running on PORT 3000');
});
