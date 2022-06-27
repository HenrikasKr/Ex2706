const express = require("express");

const {
  getAllUsersData,
  getUserById,
  getUsersByEmail,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const { addLog, getLogs } = require("../controllers/adminController");

const router = express.Router();

router.route("/").get(getAllUsersData);
router.route("/logs").get(getLogs);
router.route("/:id").get(getUserById);
router.route("/updateUser").post(updateUserById);
router.route("/userByEmail").post(getUsersByEmail);
router.route("/deleteUser/:id").delete(deleteUserById);
router.route("/add/log").post(addLog);

//Admin routes

module.exports = router;
