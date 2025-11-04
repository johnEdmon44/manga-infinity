const passport = require("passport");
const bcrypt = require("bcrypt");
const { createUser, getUser } = require("./userQueries");


async function userLoginPost(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Authentication error" });
    }

    if (!user) {
      return res.status(401).json({ error: info?.message || "Login failed" });
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error session" });
      }

      res.status(200).json({
        message: "Login success",
        user: { id: user.id, username: user.username }
      });
    });
  })(req, res, next);
}


async function userSignupPost(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    if (username.length > 20) {
      return res.status(400).json({ message: "Username must be 20 characters or fewer." });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password too short" });
    }

    const hashed = await bcrypt.hash(password, 10);
    await createUser(username, hashed);
    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ message: "User already exist" });
    }
    res.status(500).json({ error: "Failed to create user", details: err.message });
  }
}


async function userLogoutPost(req, res) {
  try {
    req.logout(function (err) {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ message: "Logout failed" });
      }

      req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.status(200).json({ message: "Logout successful" });
      });
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function userGet(req, res) {
  try {
    if (req.user) {
      res.status(200).json({ user: req.user });
    } else {
      res.status(200).json({ user: null });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
}

module.exports = { userLoginPost, userSignupPost, userLogoutPost, userGet };