const user = require('express').Router();

const { userControllerValidate } = require('../controller/user.controller');
const { 
  validateInputEmail, 
  validateName, 
  validatepassword, 
  validateUserEmail, 
} = require('../middleware/user.middlewares');

user.post(
  '/', 
  validateInputEmail,
  validateName, 
  validatepassword, 
  validateUserEmail,
  userControllerValidate,
);

module.exports = user;
