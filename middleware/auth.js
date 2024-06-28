const jwt = require('jsonwebtoken');
const User = require('../models/user');

const UserExtractor = async (req, res, next) => {


  const token = req.cookies?.accessToken;
  if(!token){
    res.status(401);
  }else{
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    req.user = user;
    res.status(200);
  }
  //console.log(decoded);
  next();

};


module.exports = { UserExtractor };