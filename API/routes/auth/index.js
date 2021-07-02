const express = require("express");
const auth = express.Router();

auth.use("/google", require("./google/signin"), require("./google/signup"));

module.exports = auth;
