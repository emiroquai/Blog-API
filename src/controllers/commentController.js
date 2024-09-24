const commentService = require("../services/commentService");
const asyncHandler = require("express-async-handler");

const createComment = asyncHandler(async (req, res, next) => {
  const { postId } = req.params;
  console.log(postId);
  // const authorId = req.user.id;
  const { authorId, content } = req.body;

  const comment = await commentService.createComment(postId, authorId, content);
  res.status(201).json(comment);
});

const deleteComment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const deletedComment = await commentService.deleteComment(id);

  if (!deletedComment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  res.status(204).send();
});

module.exports = {
  createComment,
  deleteComment,
};
