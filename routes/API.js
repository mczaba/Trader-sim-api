const express = require('express');
const router = express.Router();
const APIController = require("../controllers/APIController");

router.get("/search/:term", APIController.search);
router.get("/details/:symbol", APIController.details);

module.exports = router;