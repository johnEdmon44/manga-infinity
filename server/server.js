require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const jikanProxy = createProxyMiddleware({
  target: 'https://api.jikan.moe/v4',
  changeOrigin: true,
});

app.use('/api', jikanProxy);

app.get('/', (req, res) => res.send('express'));
const PORT = 3000;

app.listen(PORT, (err) => {
  if(err) {
    throw err;
  }

  console.log(`server runnign on  ${PORT}`);
})