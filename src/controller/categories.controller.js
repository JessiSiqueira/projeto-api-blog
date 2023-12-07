const service = require('../service/categories.service');

const createCategoryController = async (req, res) => {
  const { status, data } = await service.createCategoriesService(req.body);
  console.log(data);
  return res.status(status).json(data);
};

module.exports = {
  createCategoryController,
};
