const closeSection = async () => {

  const closesectionmovile = document.getElementById('close-section-movile');
  const closeSectionPc = document.getElementById('close-section-pc');

  closeSectionPc.addEventListener('click', async e => {
    await axios.get('/api/closeSection');
    location.reload();
  });

  closesectionmovile.addEventListener('click', async e => {

    await axios.get('/api/closeSection');
    location.reload();
  });
};