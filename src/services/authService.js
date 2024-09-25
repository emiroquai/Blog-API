const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
    },
  });
};

const loginUser = async (name, password) => {
  const user = await prisma.user.findUnique({
    where: {
      name,
    },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return { user, token };
  } else {
    throw new Error("Invalid credentials");
  }
};

module.exports = {
  loginUser,
  registerUser,
};
