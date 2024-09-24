const prisma = require("../config/prisma");

const createComment = async (postId, authorId, content) => {
  return await prisma.comment.create({
    data: {
      postId,
      authorId,
      content,
    },
  });
};

const deleteComment = async (id) => {
  return await prisma.comment.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createComment,
  deleteComment,
};
