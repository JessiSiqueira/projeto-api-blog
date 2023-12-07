const categories = require('express').Router();

const { 
  createCategoryController,
  getAllCategoriesController,
} = require('../controller/categories.controller');
const validateNameCategories = require('../middleware/categories.middleware');
const { validateToken } = require('../middleware/validateToken.middleware');

categories.post('/', validateToken, validateNameCategories, createCategoryController);
categories.get('/', validateToken, getAllCategoriesController);

module.exports = categories;