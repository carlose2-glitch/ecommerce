const saveBracelets = require('express').Router();

saveBracelets.post('/', async (req, res) => {

  console.log(req.body);

  return res.sendStatus(200);

});

module.exports = saveBracelets;