require("dotenv").config();
const express = require("express");
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const userRouter = require('./userRouter');
const app = express();
require('./passport');

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true  
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.get("/", (req, res) => res.send("express!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if(error) {
    throw error;
  }

  console.log(`server running on ${PORT}`);
})