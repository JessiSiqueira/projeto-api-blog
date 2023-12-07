const service = require('../service/categories.service');

const createCategoryController = async (req, res) => {
  const { status, data } = await service.createCategoriesService(req.body);
  console.log(data);
  return res.status(status).json(data);
};

const getAllCategoriesController = async (_req, res) => {
  const { data } = await service.getCategories();
  return res.status(200).json(data);
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};
