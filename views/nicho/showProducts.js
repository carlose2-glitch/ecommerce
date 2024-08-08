
const body = document.querySelector('body');
(async() => {

  try {
    const data = await axios.get('/api/home');
    console.log(data);

  } catch (error) {
    console.log(error.message);
    no();
  }

})();