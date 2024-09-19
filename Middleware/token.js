  const jwt=require("jsonwebtoken")
const generateToken = (userId, secret, expiresIn = '6h') => {
    try {
      console.log(userId);
      return jwt.sign({ id: userId }, secret, { expiresIn });
      
    } catch (error) {
      throw new Error('Failed to generate token');
    }
  };
  module.exports= generateToken