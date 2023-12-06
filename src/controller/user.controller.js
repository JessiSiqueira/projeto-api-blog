const service = require('../service/user.service');

const userControllerValidate = async (req, res) => {
  const data = await service.createUser(req.body);
      
  return res.status(201).json(data);
};

const getAllUserController = async (_req, res) => {
  const { data } = await service.getUsers();
  console.log(data);
  return res.status(200).json(data);
};

module.exports = {
  userControllerValidate,
  getAllUserController,
};
