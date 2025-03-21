const express = require("express");
const router = express.Router();

const DueController = require("../controllers/dueController");

router.get("/", DueController.getAll);

module.exports = router;
