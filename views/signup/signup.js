const body = document.getElementById('body');

(() => {
  body.innerHTML = `  <main class="flex justify-center flex-col h-screen font-principal gap-8 md:gap-0 bg-gray-300 md:flex-wrap">

    <div class="flex items-center justify-center md:w-1/2 max-w-7xl md:h-screen">

        <img class="w-4/5" src="../img/carrasco-high-resolution-logo-black-transparent.svg" alt="logo" >
           
    </div>
    <!-- lado derecho -->
         <div class="flex justify-center items-center flex-col md:w-1/2 max-w-7xl">
             <div class="w-5/6 h-5/6 flex justify-center flex-col items-center">
                <p class="font-bold text-2xl">Iniciar sesion</p>
                <p id="text-description" class="opacity-0">text</p>
             </div>
             <div class="flex items-center flex-col w-5/6 gap-5">
             
             <form id="form" action="" class="flex flex-col gap-6 items-center w-full">
             <input id="email" type="email" placeholder="Correo electronico" class="rounded-md h-8 w-4/6 px-4 outline-blue-300 border-b-2 border-gray-500 font-bold">
             <input id="password" type="password" placeholder="Contraseña" class="rounded-md h-8 w-4/6 px-4 outline-blue-300 border-b-2 border-gray-500">
             
             <button id="getInto" class="font-principal bg-gray-600 hover:bg-gray-700 hover:scale-110 transition delay-150 rounded-xl h-12 w-24 font-bold text-white">Ingresar</button>
         </form> 
         
         <a class="font-bold font-principal cursor-pointer hover:scale-110 transition delay-150">Olvido su contraseña</a>
         
         <a id="create-account" class="font-bold font-principal cursor-pointer hover:scale-110 transition delay-150">Crear cuenta</a>
         
         <a href="/" class="font-bold font-principal cursor-pointer hover:scale-110 underline underline-offset-4 transition delay-150">Regresar al inico</a>
             
             </div>
        
        </div> 
</main>`;
})();

const createAccount = document.getElementById('create-account');
const getInto = document.getElementById('getInto');
const email = document.getElementById('email');
const password = document.getElementById('password');
const textDescription = document.getElementById('text-description');
const form = document.getElementById('form');
//funcion para crear el usuario
createAccount.addEventListener('click', e => {
  e.preventDefault();
  window.location.href = '../createaccount/index.html';
});

email.addEventListener('input', e => {
  emptyText('opacity-0 font-bold text-red-700');
  borderColor('ok');
});
password.addEventListener('input', e => {
  emptyText('opacity-0 font-bold text-red-700');
  borderColor('ok');
});

//ingresar el usuario
getInto.addEventListener('click', async e => {
  e.preventDefault();

  if(email.value.trim() && password.value.trim()){
    evaluateData();
  }else{
    emptyText('opacity-1 font-bold text-red-700', 'Ambos son requeridos');
  }
});

const evaluateData = async () => {

  try {
    const user = {
      email: email.value,
      password: password.value
    };
    const data = await axios.post('/api/login', user);
    console.log(data.data.message);
    borderColor(data.data.message);
    window.location.href= '/';
  } catch (error) {
    emptyText('opacity-1 font-bold text-red-700', error.response.data.message);
    borderColor(error.response.data.message.toLowerCase());
  }

};
const emptyText = (especification, text) => {
  textDescription.removeAttribute('class');
  textDescription.setAttribute('class', especification);
  textDescription.innerHTML = text;
};

const borderColor = (text) => {

  if(text.includes('correo')){
    email.setAttribute('class', 'rounded-md h-8 w-4/6 px-4 outline-blue-300 border-b-2 border-red-700 font-bold');

  }else if (text.includes('contraseña')){
    password.setAttribute('class', 'rounded-md h-8 w-4/6 px-4 outline-blue-300 border-b-2 border-red-700 font-bold');
  }else{
    email.setAttribute('class', 'rounded-md h-8 w-4/6 px-4 outline-blue-300 border-b-2 border-gray-500 font-bold');
    password.setAttribute('class', 'rounded-md h-8 w-4/6 px-4 outline-blue-300 border-b-2 border-gray-500 font-bold');
  }

};