const getAdmin = require('express').Router();


getAdmin.get('/', async (req, res) => {


  const token = req.cookies?.access;//verifica si esta la cookie en el navegador
  console.log(token);

  if(token !== undefined){
    console.log('sisasss');
    return res.status(200).json({ data:'yes' });
  }else{
    console.log('nolsa');
    return res.status(400).json({ data:'404 not found' });
  }


});

module.exports = getAdmin;