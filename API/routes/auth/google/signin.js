const express = require("express");
const login = express.Router();

const passport = require("../../../auth/");

login.post("/signin", function (req, res) {
  passport.authenticate("google-signin", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Something happend",
        error: error.message || "Server error",
      });
    }

    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
    });

    user.isAuthenticated = true;
    return res.json(user);
  })(req, res);
});

module.exports = login;
