const express = require("express");
const router = express.Router();
const { userLoginPost, userSignupPost, userLogoutPost } = require('./userController');

router.post("/login", userLoginPost);
router.post('/signup', userSignupPost);
router.post("/logout", userLogoutPost);

module.exports = router;
