require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("express!"));

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if(error) {
    throw error;
  }

  console.log('test')
})

const { getAllusers } = require("./queries");

(async () => {
  await getAllusers();
})();