const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.use("/auth", require("./auth"));

router.get("/profile", function (req, res) {
  User.findOne({ email: req.session.passport.user.email })
    .lean()
    .exec((err, user) => {
      if (err) console.log(err);
      if (user) res.status(200).send(user);
      else {
        res.status(404).send();
      }
    });
});

module.exports = router;
