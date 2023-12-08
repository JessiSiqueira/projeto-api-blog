const { BlogPost, PostCategory } = require('../models');

const createBLogPost = async ({ title, content, categoryIds }, userId) => {
  const { published } = {
    published: new Date(),
  };
  const { updated } = {
    updated: new Date(),
  };
  const post = await BlogPost.create({ title, content, categoryIds, userId, published, updated });
  await categoryIds
    .forEach((category) => PostCategory.create(
      { postId: post.id, categoryId: category },
    ));

  return { status: 201, data: post };
};

module.exports = {
  createBLogPost,
};
