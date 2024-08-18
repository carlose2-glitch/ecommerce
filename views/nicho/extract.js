

const url = document.URL;

const extract = async () => {

  let urlSearch = '';

  const category = url.split('/')[4];

  if(category === 'relojes'){
    urlSearch = '/api/getWatch';
  }

  if(category === 'camisas' || category === 'gorras' || category === 'pulseras'){
    urlSearch = '/api/extractShirts';
  }

  if(category === 'lentes'){
    urlSearch = '/api/extractGlass';
  }


  try {
    const r = await axios.post( urlSearch , { category });
    console.log(r.data.get);
  } catch (error) {
    console.log(error.message);
  }
};
