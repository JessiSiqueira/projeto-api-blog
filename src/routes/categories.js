const categories = require('express').Router();

const { createCategoryController } = require('../controller/categories.controller');
const validateNameCategories = require('../middleware/categories.middleware');
const { validateToken } = require('../middleware/validateToken.middleware');

categories.post('/', validateToken, validateNameCategories, createCategoryController);

module.exports = categories;