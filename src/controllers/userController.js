const userService = require("../services/userService");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await userService.createUser(name, password);
  res.status(201).json(user);
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;

  const updatedUser = await userService.updateUser(id, name, password);

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedUser = await userService.deleteUser(id);

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(204).send();
});

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
