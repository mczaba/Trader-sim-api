const express = require('express');
const router = express.Router();
const userController = require("../controllers/UserController");

router.post("/signup", userController.post_SignUp);
router.post("/login", userController.post_LogIn);

module.exports = router;