const { Router } = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = Router();

router.post("/admin/", authenticate, verifyAdmin, createUser);
router.get("/", authenticate, getUsers);
router.get("/:id", authenticate, getUserById);
router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, deleteUser);

module.exports = router;
