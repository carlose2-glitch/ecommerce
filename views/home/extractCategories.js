const extractCategories = async (n) => {

  const data = {
    shirtUrl:'',
    shirtId:'',
    shirtDescription:'',
    shirtPrice:'',
    capUrl:'',
    capId: '',
    capDescription:'',
    capPrice:'',
    braceletsUrl:'',
    braceletsId:'',
    braceletsDescription:'',
    braceletsPrice:'',
    watchUrl:'',
    watchId:'',
    watchDescription:'',
    watchPrice:'',
    glassUrl:'',
    glassId:'',
    glassDescription:'',
    glassPrice:''
  };

  try {
    const shirt = await axios.post('/api/extractShirts', { category: 'camisas' });
    data.shirtUrl = shirt.data.get[n].url1;
    data.shirtId = shirt.data.get[n]._id;
    console.log(shirt.data.get[n].description);
    data.shirtDescription = shirt.data.get[n].description;
    data.shirtPrice = shirt.data.get[n].price;
    const cap = await axios.post('/api/extractShirts', { category: 'gorras' });
    data.capUrl = cap.data.get[n].url1;
    data.capId = cap.data.get[n]._id;
    data.capDescription = cap.data.get[n].description;
    data.capPrice = cap.data.get[n].price;
    const bracelets = await axios.post('/api/extractShirts', { category: 'pulseras' });
    data.braceletsUrl = bracelets.data.get[n].url1;
    data.braceletsId = bracelets.data.get[n]._id;
    data.braceletsDescription = bracelets.data.get[n].description;
    data.braceletsPrice = bracelets.data.get[n].price;
    const watch = await axios.post('/api/extractwatch',{ category: 'relojes' });
    data.watchUrl = watch.data.get[n].url1;
    data.watchId = watch.data.get[n]._id;
    data.watchDescription = watch.data.get[n].description;
    data.watchPrice = watch.data.get[n].price;
    const glass = await axios.post('/api/extractGlass', { category: 'lentes' });
    data.glassUrl = glass.data.get[n].url1;
    data.glassId = glass.data.get[n]._id;
    data.glassDescription = glass.data.get[n].description;
    data.glassPrice = glass.data.get[n].price;
  } catch (error) {
    console.log(error);
  }

  return data;
};