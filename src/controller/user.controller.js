const service = require('../service/user.service');

const userControllerValidate = async (req, res) => {
  const data = await service.createUser(req.body);
      
  return res.status(201).json(data);
};

const getAllUserController = async (_req, res) => {
  const { data } = await service.getUsers();
  return res.status(200).json(data);
};

const getOneUserController = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await service.getOneUser(id);
  return res.status(status).json(data);
};

module.exports = {
  userControllerValidate,
  getAllUserController,
  getOneUserController,
};
