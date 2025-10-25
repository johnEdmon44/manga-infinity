const express = require("express");
const router = express.Router();
const {
  addBookmarkPost,
  getUserBookmarks,
  removeBookmarkPost,
} = require("./bookmarkController");


router.get("/", getUserBookmarks);
router.post("/add", addBookmarkPost);
router.post("/remove", removeBookmarkPost);


module.exports = router;
