const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser, getUserById, updateUserById, deleteUserById } = require("../controllers/User");
const { login, signup, protect } = require("../controllers/Auth")

userRouter
  .route("/")
  .all(protect)
  .get(getAllUsers)
  .post(addUser);


userRouter
  .route("/:id")
  .all(protect)
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = userRouter;