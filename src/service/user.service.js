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

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { data: users };
};

const getOneUser = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
  if (!user) {
    return { status: 404, data: { message: 'User does not exist' } };
  }
  return { status: 200, data: user };
};

module.exports = {
  createUser,
  getUsers,
  getOneUser,
};