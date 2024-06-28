const btn = document.getElementById('btn');
const error = document.getElementById('error');
const user = document.getElementById('user');
const password = document.getElementById('password');
const confirnPas = document.getElementById('confirnPass');


user.addEventListener('input', e => {
  error.setAttribute('class', 'hidden');
});

password.addEventListener('input', e => {
  error.setAttribute('class', 'hidden');
});
confirnPas.addEventListener('input', e => {
  error.setAttribute('class', 'hidden');
});


btn.addEventListener('click', e => {

  e.preventDefault();

  //console.log( 'usuario '+ form.children[1].value);
  //console.log('clave ' + form.children[3].value);
  //console.log('confirmar clave ' + form.children[5].value);
  const verificationPass = confirnPass(password.value, confirnPas.value);

  verificationData(verificationPass);
});


const confirnPass = (pas, con) => {

  if(pas === con){
    return true;
  }else{
    error.removeAttribute('class');
    error.setAttribute('class', 'text-8xl');
    return false;
  }

};

const verificationData = async (v) => {

  if(v){


    try {
      const data = await axios.post('/api/verificationAdmin', { name:user.value, password: password.value } );
      console.log(data);
      window.location.href = '../personalitation/index.html';
    } catch (error) {
      console.log(error.response.data.data);
    }

  }else{
    error.removeAttribute('class');
    error.setAttribute('class', 'text-8xl');
  }
};