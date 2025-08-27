const express = require("express");

// Middleware to parse JSON requests..
app.use(express.json());

// Created the instance of express...
const app = express();

app.use("/", (req, res) => {
  res.send("first route created and successfully responded");
});

app.listen(3000, () => {
  console.log("Successfully created a Server..");
});
