const authService = require("../services/authService");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await userService.createUser(name, password);
  res.status(201).json(user);
});

const loginUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Name and password are required" });
  }

  const { user, token } = await authService.loginUser(name, password);
  res.status(200).json({ message: "Login successful", user, token });
});

module.exports = {
  registerUser,
  loginUser,
};
