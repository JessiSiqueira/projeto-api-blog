const JWT = require('jsonwebtoken');
const service = require('../service/login.service');

const { JWT_SECRET } = process.env;

const tokenValidateController = async (req, res) => {
  try {
    const { status, data } = await service.tokenValidateService(req.body);
    if (data.message) {
      return res.status(status).json(data);
    }
    const payload = { 
      id: data.id,
      email: data.email,
    };
    
    const token = JWT.sign(payload, JWT_SECRET, {
      expiresIn: '7d',
    });
    
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error validating login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  tokenValidateController,
};
