const prisma = require("../config/prisma");

const getAllPosts = async () => {
  return await prisma.post.findMany();
};

const getAllPublishedPosts = async () => {
  return await prisma.post.findMany({
    where: {
      isPublished: true,
    },
  });
};

const getAllUnpublishedPosts = async () => {
  return await prisma.post.findMany({
    where: {
      isPublished: false,
    },
  });
};

const getPostById = async (postId) => {
  return await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
};

const createPost = async (data) => {
  return await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: data.authorId,
      isPublished: data.isPublished || true,
    },
  });
};

const updatePost = async (postId, data) => {
  return await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      title: data.title,
      content: data.content,
      isPublished: data.isPublished,
    },
  });
};

const deletePost = async (postId) => {
  return await prisma.post.delete({
    where: {
      id: postId,
    },
  });
};

module.exports = {
  getAllPosts,
  getAllPublishedPosts,
  getAllUnpublishedPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
