const { JWT_SECRET } = process.env;

const JWT = require('jsonwebtoken');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });

  const payload = { 
    id: user.id,
    email: user.email,
  };
  
  const userToken = JWT.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
  });

  return { token: userToken };
};

module.exports = {
  createUser,
};