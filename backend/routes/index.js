const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const auth = require("../middlewares/authorization");
const taskRouter = require("./task");

router.use("/", userRouter);
router.use(auth);
router.use("/task", taskRouter);

module.exports = router;
