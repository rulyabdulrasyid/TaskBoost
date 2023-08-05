const express = require("express");
const router = express.Router();

const PriorityController = require("../controllers/priorityController");

router.get("/", PriorityController.getAll);
router.post("/", PriorityController.AddPriority);

module.exports = router;
