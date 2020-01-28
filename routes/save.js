const express = require('express');
const router = express.Router();
const SaveController = require("../controllers/SaveController");

router.post("/", SaveController.post_save);
router.get("/", SaveController.get_save);

module.exports = router;