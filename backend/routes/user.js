const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.getAll);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router;
