const login = require('express').Router();

const { tokenValidateController } = require('../controller/login.controller');
const loginValidation = require('../middleware/login.middlewares');

login.post('/', loginValidation, tokenValidateController);

module.exports = login;
