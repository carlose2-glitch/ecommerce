const body = document.getElementById('body');


(async () => {

  try {
    const data = await axios.get('/api/home');
    console.log('registrado');
    console.log(data.data.data);
    console.log(data.status);
    registered(data.data.data);
  } catch (error) {
    console.log(error);
    noRegistered();

  }

})();