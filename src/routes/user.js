const user = require('express').Router();

const { userControllerValidate, getAllUserController } = require('../controller/user.controller');
const { 
  validateInputEmail, 
  validateName, 
  validatepassword, 
  validateUserEmail, 
} = require('../middleware/user.middlewares');
const { validateToken } = require('../middleware/validateToken.middleware');

user.post(
  '/', 
  validateInputEmail,
  validateName, 
  validatepassword, 
  validateUserEmail,
  userControllerValidate,
);

user.get('/', validateToken, getAllUserController);

module.exports = user;
