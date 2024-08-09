
const body = document.querySelector('body');
(async() => {

  try {
    const data = await axios.get('/api/home');
    console.log(data);
    yes('si');
  } catch (error) {
    console.log(error.message);
    no('no');
  }

})();