const { Category } = require('../models');

const createCategoriesService = async (name) => {
  const user = await Category.create(name);
  return { status: 201, data: user };
};

module.exports = {
  createCategoriesService,
};
