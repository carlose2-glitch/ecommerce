const urlProduct =  document.URL.split('/')[4];
const body = document.querySelector('body');
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

  body.setAttribute('class', 'font-principal font-bold w-full bg-slate-300 flex flex-wrap');

  try {
    const data = await axios.get('/api/home');
    console.log(data);
    registered(array[0]);
  } catch (error) {
    console.log(error.message);
    noRegistered(array[0]);
  }


})();


