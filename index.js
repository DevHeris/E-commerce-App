const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("All good so far!");
});

app.listen(3000, () => {
  console.log("listening");
});
