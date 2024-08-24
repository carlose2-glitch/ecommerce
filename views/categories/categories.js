const urlProduct =  document.URL.split('/')[4];

const array = [];


(async() => {

  try {
    const data = await axios.post('/api/extracIdShirts', { urlProduct });
    console.log(data.data.data);

    if(data.data.data !== null){
      array.push(data.data.data);
    }else{
      console.log('no');
    }
  } catch (error) {
    console.log(error);
  }


  try {
    const data = await axios.post('/api/extractIdGlass', { urlProduct });
    console.log(data.data.data);

    if(data.data.data !== null){
      array.push(data.data.data);
    }else{
      console.log('no');
    }
  } catch (error) {
    console.log('error');
  }

  try {
    const data = await axios.post('/api/extractIdWatch', { urlProduct });
    if(data.data.data !== null){
      array.push(data.data.data);
    }else{
      console.log('no');
    }
  } catch (error) {
    console.log(error);
  }

  console.log(array);
})();



