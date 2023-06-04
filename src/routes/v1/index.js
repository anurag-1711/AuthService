const express = require("express");

const UserController = require("../../controllers/user-controller");

const router = express.Router();

router.post("/signup", UserController.create);
router.post("/signin", UserController.signIn);
router.get("/getuser", UserController.getById);

module.exports = router; 