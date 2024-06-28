
(async () => {
  const data = await axios.get('/api/categorieget');
  const eyelash = data.data.data[0].category;
  document.title = eyelash;
})();


