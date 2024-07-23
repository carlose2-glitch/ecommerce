const jwt = require('jsonwebtoken');
const User = require('../models/user');

const UserExtractor = async (req, res, next) => {


  const token = req.cookies?.accessToken;

  if(token){
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    console.log(user);
    req.user = user;
    res.status(200);
  }else{
    res.status(404);
  }
  //console.log(decoded);
  next();

};


module.exports = { UserExtractor };