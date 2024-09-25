const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

const createUser = async (name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
    },
  });
};

const getUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

const updateUser = async (id, name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      password: hashedPassword,
    },
  });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
