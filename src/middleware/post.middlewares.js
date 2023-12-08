const service = require('../service/categories.service');

const validateFields = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (title.length === 0 || content.length === 0 || categoryIds.length === 0) {
    return res.status(400).json({
      message: 'Some required fields are missing', 
    });
  }
  next();
};

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  const promisesCategories = await categoryIds.map((id) => service.getCategory(id));
  const promisesResolve = await Promise.all(promisesCategories);
  const checkIds = promisesResolve.some((category) => category === null);  
  if (checkIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateFields,
  validateCategoryId,  
};
