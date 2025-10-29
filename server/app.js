require("dotenv").config();
const express = require("express");
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const userRouter = require('./user/userRouter');
const bookmarkRouter = require("./bookmark/bookmarkRouter");
const app = express();
require('./config/passport');

app.use(cors({
  origin: process.env.URL,
  credentials: true  
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,        // use true only in HTTPS
      sameSite: "lax",      // use 'none' + secure for HTTPS
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days session
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/bookmarks', bookmarkRouter);

app.get("/", (req, res) => res.send("express!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if(error) {
    throw error;
  }

  console.log(`server running on ${PORT}`);
})