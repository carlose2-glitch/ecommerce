
const authAdmin = async (req, res, next) => {

  res.status(200);

  next();
};

module.exports = { authAdmin };