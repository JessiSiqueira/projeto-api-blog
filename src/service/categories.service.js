const { Category } = require('../models');

const createCategoriesService = async (name) => {
  const user = await Category.create(name);
  return { status: 201, data: user };
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return { data: categories };
};

const getCategory = async (categoryId) => {
  const category = await Category.findByPk(categoryId);
  return category;
};

module.exports = {
  createCategoriesService,
  getCategories,
  getCategory,
};
