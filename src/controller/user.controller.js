const service = require('../service/user.service');

const userControllerValidate = async (req, res) => {
  const token = await service.createUser(req.body);
      
  return res.status(201).json(token);
};

module.exports = {
  userControllerValidate,
};
