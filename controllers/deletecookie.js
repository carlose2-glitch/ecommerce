const deleteCookie = require('express').Router();


deleteCookie.get('/', async (req, res) => {
  //const cookie = req.cookies;
  //console.log(cookie.access);
  res.clearCookie('access');
  return res.sendStatus(200);
});

module.exports = deleteCookie;