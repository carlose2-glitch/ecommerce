const closeSection = require('express').Router();


closeSection.get('/', async (req, res) => {

  res.clearCookie('accessToken');
  return res.sendStatus(200);
});

module.exports = closeSection;