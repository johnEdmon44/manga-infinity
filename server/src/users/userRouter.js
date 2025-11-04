const express = require("express");
const router = express.Router();
const { userLoginPost, userSignupPost, userLogoutPost, userGet } = require('./userController');

router.post("/login", userLoginPost);
router.post('/signup', userSignupPost);
router.post("/logout", userLogoutPost);
router.get('/', userGet);

module.exports = router;