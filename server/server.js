require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const userRouter = require('./src/users/userRouter');
const bookmarkRouter = require("./src/bookmarks/bookmarkRouter");
require("./src/model/passport");
const app = express();

const isProduction = process.env.NODE_ENV === "dsss";

const jikanProxy = createProxyMiddleware({
  target: 'https://api.jikan.moe/v4',
  changeOrigin: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', jikanProxy);

app.use('/user', userRouter);
app.use('/bookmarks', bookmarkRouter);


app.get('/', (req, res) => res.send('express'));
const PORT = 3000;

app.listen(PORT, (err) => {
  if(err) {
    throw err;
  }

  console.log(`server runnign on  ${PORT}`);
})