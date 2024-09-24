const postService = require("../services/postService");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
});

const getAllPublishedPosts = asyncHandler(async (req, res, next) => {
  const posts = await postService.getAllPublishedPosts();
  res.json(posts);
});

const getAllUnpublishedPosts = asyncHandler(async (req, res, next) => {
  const posts = await postService.getAllUnpublishedPosts();
  res.json(posts);
});

const getPostById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const post = await postService.getPostById(id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

const createPost = asyncHandler(async (req, res, next) => {
  const post = await postService.createPost(req.body);
  res.status(201).json(post);
});

const updatePost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const updatedPost = await postService.updatePost(id, req.body);

  if (!updatedPost) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(updatedPost);
});

const deletePost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const deletedPost = await postService.deletePost(id);

  if (!deletedPost) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(204).send();
});

module.exports = {
  getAllPosts,
  getAllPublishedPosts,
  getAllUnpublishedPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
