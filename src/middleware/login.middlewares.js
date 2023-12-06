const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  if (!password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  next();
};
module.exports = loginValidation;