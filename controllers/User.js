const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "ok",
    data: users,
  });
}

const addUser = async (req, res) => {
  let newUser = new User();
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser = await newUser.save();
  res.status(200).json({
    status: "ok",
    dataInserted: newUser,
  });
}

const getUserById = async (req, res) => {
  const _id = req.params.id;
  const user = await User.findById({ _id });
  res.status(200).json({
    status: "ok",
    data: user,
  });
}

const updateUserById = async (req, res) => {
  const _id = req.params.id;
  let userUpdated = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  const user = await User.findByIdAndUpdate(_id, userUpdated, { new: true });
  res.status(200).json({
    status: "ok",
    data: user,
  });
}

const deleteUserById = async (req, res) => {
  const _id = req.params.id;
  const user = await User.findByIdAndDelete({ _id });
  res.status(200).json({
    status: "ok",
    message: `${user.firstName} has been deleted`,
  });
}

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
  updateUserById,
  deleteUserById
}

