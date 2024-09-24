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
const router = Router();

router.get("/all", getAllPublishedPosts);
router.get("/admin/all", getAllPosts);
router.get("/admin/unpublished", getAllUnpublishedPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
