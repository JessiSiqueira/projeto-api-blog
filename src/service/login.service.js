const { User } = require('../models');

const tokenValidateService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  if (!user || user.password !== password) {
    return { status: 400, data: { message: 'Invalid fields' } };  
  }
  return { status: 200, data: user };
};

module.exports = {
  tokenValidateService,
};