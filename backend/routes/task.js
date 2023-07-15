const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");

router.get("/", TaskController.getAll);
router.get("/:id", TaskController.getOne);
router.post("/create", TaskController.create);
router.delete("/:id", TaskController.delete);

module.exports = router;
