const linksHamburguer = () => {
  const signup = document.getElementById('signup-pc');
  const signupMovile = document.getElementById('signup-movile');
  const createAccount = document.getElementById('create_account-pc');
  const createAccountMovile = document.getElementById('create-account-movile');



  signup.addEventListener('click', e => {
    window.location.href = '/signup/index.html';
  });

  signupMovile.addEventListener('click', e => {
    window.location.href = '/signup/index.html';
  });

  createAccount.addEventListener('click', e => {
    window.location.href = '/createaccount/index.html';
  });

  createAccountMovile.addEventListener('click', e => {
    window.location.href = '/createaccount/index.html';
  });
};


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

