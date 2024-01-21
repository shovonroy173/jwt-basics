const express = require("express");
const router = express();

// internal login 
const {login , dashboard} = require("../controllers/main");

// routes
router.route("/login").post(login);
router.route("/dashboard").get(dashboard);

module.exports = router;