const { Router } = require("express");
const {
  getAllPosts,
  getAllPublishedPosts,
  getAllUnpublishedPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const {
  createComment,
  deleteComment,
} = require("../controllers/commentController");
const authenticate = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = Router();

router.get("/all", getAllPublishedPosts);
router.get("/admin/all", authenticate, verifyAdmin, getAllPosts);
router.get(
  "/admin/unpublished",
  authenticate,
  verifyAdmin,
  getAllUnpublishedPosts
);
router.get("/:id", getPostById);
router.post("/", authenticate, createPost);
router.put("/:id", authenticate, updatePost);
router.delete("/:id", authenticate, deletePost);

router.post("/:postId/comments", authenticate, createComment);
router.delete("/:postId/comments/:commentId", authenticate, deleteComment);

module.exports = router;
