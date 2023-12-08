const post = require('express').Router();

const { postController } = require('../controller/post.controller');
const { validateFields, validateCategoryId } = require('../middleware/post.middlewares');
const { validateToken } = require('../middleware/validateToken.middleware');

post.post('/', validateToken, validateFields, validateCategoryId, postController);

module.exports = post;