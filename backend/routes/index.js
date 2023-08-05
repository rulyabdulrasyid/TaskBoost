const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const auth = require("../middlewares/authorization");
const taskRouter = require("./task");
const priorityRouter = require("./priority");
const dueRouter = require("./due");

router.use("/", userRouter);
router.use("/priority", priorityRouter);
router.use("/due", dueRouter);
router.use(auth);
router.use("/task", taskRouter);

module.exports = router;
