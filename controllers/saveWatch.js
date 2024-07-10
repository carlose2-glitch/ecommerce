const saveWatch = require('express').Router();


saveWatch.post('/', async (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
});

module.exports = saveWatch;