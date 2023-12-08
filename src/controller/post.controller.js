const service = require('../service/post.service');

const postController = async (req, res) => {
  const { id } = req.user;
  const { status, data } = await service.createBLogPost(req.body, id);
      
  return res.status(status).json(data);
};

module.exports = {
  postController,
};