const body = document.getElementById('body');
let nameBoolean = false;
let lastNameBoolean = false;
let emailBoolean = false;
let passwordBoolean = false;
let confirmPasswordBoolean = false;
//crear el html
(() => {
  body.innerHTML = `  <main class="flex h-screen w-screen max-w-screen-2xl flex-col items-center justify-center gap-8 md:flex-row md:gap-0">

    <div id="lef" class="flex justify-center items-center md:w-1/2">

        <img src="../img/carrasco-high-resolution-logo-black-transparent.svg" alt="" class="w-4/5">
    </div>

    <div id="right" class="flex justify-center items-center flex-col w-full md:w-1/2">

        <h2 class="font-bold text-2xl">Registrarse</h2>
        <p id="text-email" class="opacity-0 font-bold text-red-700">El correo ya se encuentra registrado</p>
        <form id="form" class="flex flex-col items-center w-full">
            <div class="h-16 outline-blue-300 w-4/6">
                <input type="text" placeholder="nombre" id="name" class="h-8 rounded-md px-4 outline-blue-300 border-b-2 border-gray-500 w-full">
                <p class="text-xs text-red-700 font-bold py-1 opacity-0">Debe empezar con mayuscula sin espacios</p>
            </div>
            <div class="h-16 outline-blue-300 w-4/6">
                <input type="text" placeholder="apellido" id="last-name" class="h-8 rounded-md px-4 outline-blue-300 border-b-2 border-gray-500 w-full">
                <p class="text-xs text-red-700 font-bold py-1 opacity-0">Debe empezar con mayuscula sin espacios</p>
            </div>
            <div class="h-16 outline-blue-300 w-4/6">
                <input type="text" placeholder="correo electronico" id="email" class="h-8 rounded-md px-4 outline-blue-300 border-b-2 border-gray-500 w-full">
                <p class="text-xs text-red-700 font-bold py-1 opacity-0">Deber ser: hotmail, gmail, yahoo, outlook</p>
            </div>
            <div class="h-16 outline-blue-300 w-4/6">
                <input type="password" placeholder="clave" id="password" class="h-8 rounded-md px-4 outline-blue-300 border-b-2 border-gray-500 w-full">
                <p class="text-xs text-red-700 font-bold py-1 opacity-0">Entre 8 y 16 caracteres y comenzar con letra</p>
            </div>
            <div class="h-16 outline-blue-300 w-4/6">
                <input type="password" placeholder="confirmar clave" id="confirm-password" class="h-8 rounded-md px-4 outline-blue-300 border-b-2 border-gray-500 w-full">
                <p class="text-xs text-red-700 font-bold py-1 opacity-0">La clave es incorrecta</p>
            </div>
            <button id="button_create" class="font-bold bg-indigo-500 w-32 h-12 rounded-xl text-white transition ease-out hover:scale-125 duration-500">
            Crear
            </button>

          <a id="return" href="" class="font-bold py-3 cursor-pointer underline underline-offset-4 transition ease-out hover:scale-125 duration-500">Regresar al inicio</a>
    </div>
</main> `;
})();

/*<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing...
</button>


 <button type="button" class="bg-indigo-500 flex items-center h-12 rounded-xl" disabled>
            <svg class="animate-spinn h-5 w-5 rounded-xl mx-2 border-2 border-indigo-400 border-r-white">

            </svg>
            <p class="text-white mr-2"> Cargando...</p>

            </button>
*/
const Name = document.getElementById('name');
const back = document.getElementById('return');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPasswordText = document.getElementById('confirm-password');
const createUser = document.getElementById('button_create');
const form = document.getElementById('form');
const textEmail = document.getElementById('text-email');

//regresar al inicio de la pagina
back.addEventListener('click', e => {

  e.preventDefault();
  window.location.href = '/';
});

//inputs del formulario

Name.addEventListener('input', e => {
  const input = e.target.value;
  const tag = e.target;
  const trueColorsRegex =  'h-8 rounded-md px-4 outline-green-700 border-b-2 border-gray-500 w-full';
  const falseColorsRegex = 'h-8 rounded-md px-4 outline-red-700 border-b-2 border-gray-500 w-full';
  const regexVerification= /^[A-Z][a-z]+$/;
  const text = 'Debe empezar con mayuscula sin espacios';
  textEmail.removeAttribute('class');
  textEmail.setAttribute('class', 'opacity-0 font-bold text-red-700');
  nameBoolean = verificationText(input, tag, trueColorsRegex, falseColorsRegex, regexVerification, text);
});
lastName.addEventListener('input', e => {
  const input = e.target.value;
  const tag = e.target;
  const trueColorsRegex =  'h-8 rounded-md px-4 outline-green-700 border-b-2 border-gray-500 w-full';
  const falseColorsRegex = 'h-8 rounded-md px-4 outline-red-700 border-b-2 border-gray-500 w-full';
  const regexVerification= /^[A-Z][a-z]+$/;
  const text = 'Debe empezar con mayuscula sin espacios';
  textEmail.removeAttribute('class');
  textEmail.setAttribute('class', 'opacity-0 font-bold text-red-700');
  lastNameBoolean = verificationText(input, tag, trueColorsRegex, falseColorsRegex, regexVerification, text);
});
email.addEventListener('input', e => {
  const input = e.target.value;
  const tag = e.target;
  const trueColorsRegex =  'h-8 rounded-md px-4 outline-green-700 border-b-2 border-gray-500 w-full';
  const falseColorsRegex = 'h-8 rounded-md px-4 outline-red-700 border-b-2 border-gray-500 w-full';
  const regexVerification = /^[a-z0-9-_]+@(gmail|hotmail|yahoo|outlook).com$/;
  const text = 'Deber ser: hotmail, gmail, yahoo, outlook';
  textEmail.removeAttribute('class');
  textEmail.setAttribute('class', 'opacity-0 font-bold text-red-700');
  emailBoolean = verificationText(input, tag, trueColorsRegex, falseColorsRegex, regexVerification, text);
});
password.addEventListener('input', e => {
  const input = e.target.value;
  const tag = e.target;
  const trueColorsRegex =  'h-8 rounded-md px-4 outline-green-700 border-b-2 border-gray-500 w-full';
  const falseColorsRegex = 'h-8 rounded-md px-4 outline-red-700 border-b-2 border-gray-500 w-full';
  const regexVerification = /^[A-Za-z][0-9A-Za-z\*\+\_\-\#\$\%\!]{7,15}$/;
  const text = 'Entre 8 y 16 caracteres y comenzar con letra';
  textEmail.removeAttribute('class');
  textEmail.setAttribute('class', 'opacity-0 font-bold text-red-700');
  passwordBoolean = verificationText(input, tag, trueColorsRegex, falseColorsRegex, regexVerification, text);
  comparePassword(input, confirmPasswordText.value, confirmPasswordText, trueColorsRegex, falseColorsRegex);

});
confirmPasswordText.addEventListener('input', e => {
  const input = e.target.value;
  const tag = e.target;
  const trueColorsRegex =  'h-8 rounded-md px-4 outline-green-700 border-b-2 border-gray-500 w-full';
  const falseColorsRegex = 'h-8 rounded-md px-4 outline-red-700 border-b-2 border-gray-500 w-full';
  const text = 'La clave es incorrecta';
  const dataVerification =  e.target.parentElement.parentElement.children[3].children[0].value;
  textEmail.removeAttribute('class');
  textEmail.setAttribute('class', 'opacity-0 font-bold text-red-700');
  confirmPasswordBoolean = verificationPasswordConfirm(input, tag, trueColorsRegex, falseColorsRegex, dataVerification, text);
});
//verificacion de los datos del formulario
const verificationText = (data, tag, colorEditionTrue, ColorEditionFalse, regex, tex) => {
  //reglas de crear nombre
  if(regex.test(data)){//si el nombre es correcto
    colorVerification(tag, colorEditionTrue);
    tag.parentElement.children[1].removeAttribute('class');
    tag.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-0');
    emptyInput(data, tag, 'h-8 rounded-md px-4 outline-none border-b-2 border-gray-500 w-full' );
    return true;
  }else{//si el nombre es incorrecto
    colorVerification(tag, ColorEditionFalse);
    tag.parentElement.children[1].removeAttribute('class');
    tag.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-100');
    tag.parentElement.children[1].innerHTML = tex;
    emptyInput(data, tag, 'h-8 rounded-md px-4 outline-none border-b-2 border-gray-500 w-full' );
    return false;
    //tag.parentElement.appendChild(dataIcorrect);

  }

};
//asigna un color de acuerdo si los requisitos son correctos o no
const colorVerification = (tag, Colors) => {
  tag.removeAttribute('class');
  tag.setAttribute('class', `${Colors}`);
};
//verificacion de la clave
const  verificationPasswordConfirm = (input, tag, trueColorsRegex, falseColorsRegex, dataVerification, tex) => {

  if(input === dataVerification){
    colorVerification(tag, trueColorsRegex);
    tag.parentElement.children[1].removeAttribute('class');
    tag.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-0');
    emptyInput(input, tag, 'h-8 rounded-md px-4 outline-none border-b-2 border-gray-500 w-full' );
    return true;
  }else{
    colorVerification(tag, falseColorsRegex);
    tag.parentElement.children[1].removeAttribute('class');
    tag.parentElement.children[1].innerHTML = tex;
    tag.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-100');
    emptyInput(input, tag, 'h-8 rounded-md px-4 outline-none border-b-2 border-gray-500 w-full' );
    return false;
  }
};
//verifica si el input esta vacio
const emptyInput = (dataInput, tag, colorEdition) => {
  if(!dataInput.trim()){
    //colorEdition = 'h-8 rounded-md px-4 outline-green-700 border-b-2 border-gray-500 w-4/6';
    tag.removeAttribute('class');
    tag.setAttribute('class', `${colorEdition}`);
    tag.parentElement.children[1].removeAttribute('class');
    tag.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-0');
  }
};

//compara la clave con confirmar clave
const comparePassword = (input, compare, tag, trueColors, falseColors) => {

  if(compare.trim()){

    if(input === compare){
      colorVerification(tag, trueColors);
      tag.parentElement.children[1].removeAttribute('class');
      tag.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-0');
      confirmPasswordBoolean = true;
    }else{
      colorVerification(tag, falseColors);
      tag.parentElement.children[1].removeAttribute('class');
      tag.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-100');
      confirmPasswordBoolean = false;
    }

  }
};
//evento del boton crear
createUser.addEventListener('click', e => {
  e.preventDefault();


  if(nameBoolean && lastNameBoolean && emailBoolean && passwordBoolean && confirmPasswordBoolean){

    saveUser(Name.value, lastName.value, email.value, password.value, e.target);

  }else{
    verifyBlank(Name, lastName, email, password, confirmPasswordText);
  }
  console.log(nameBoolean, lastNameBoolean, emailBoolean, passwordBoolean, confirmPasswordBoolean);
});
//guardar los datos del usuario en el objeto
const saveUser = async (nameInput, lastNameInput, emailInput, passwordInput, target) => {
  try {

    const newUser = {
      name: nameInput,
      lastName: lastNameInput,
      email: emailInput,
      password: passwordInput,
    };
    Name.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    confirmPasswordText.value = '';
    changeIcon('bg-indigo-500 flex items-center h-12 rounded-xl', 'cargando', target);
    //guarda los datos en mongo
    await axios.post('/api/users', newUser);
    window.location.href= '/';
  } catch (error) {

    console.log(error.response.data.message);
    changeIcon('font-bold bg-indigo-500 w-32 h-12 rounded-xl text-white transition ease-out hover:scale-125 duration-500', 'crear', target);
  }
  nameBoolean = false;
  lastNameBoolean = false;
  emailBoolean = false;
  passwordBoolean = false;
  confirmPasswordBoolean = false;

};

//verifica cada reglon del formulario
const verifyBlank = (name, lastName, email, password, passwordconf) => {

  const array = [name, lastName, email, password, passwordconf];
  textEmail.setAttribute('class', 'opacity-0 font-bold text-red-700');
  // name.parentElement.children[1].innerHTML = 'No debe estar vacio';
  //console.log(name.parentElement.children[1].innerHTML);
  for(let arreglo of array){
    if(!arreglo.value.trim()){
      arreglo.parentElement.children[1].innerHTML = 'No debe estar vacio';
      arreglo.parentElement.children[1].removeAttribute('class');
      arreglo.parentElement.children[1].setAttribute('class', 'text-xs text-red-700 font-bold py-1 opacity-100');
    }
  }
};
//funcion que sirve para cambiar el icono del boton crear
const changeIcon = (tag, selection, target) => {


  if(selection === 'cargando'){

    target.setAttribute('class', tag);
    target.setAttribute('disabled', '');
    target.innerHTML = '<svg class="animate-spinn h-5 w-5 rounded-xl mx-2 border-2 border-indigo-400 border-r-white"></svg><p class="text-white mr-2"> Cargando...</p>';
    console.log(target);
  }else{
    const son = target.children[0];
    target.removeChild(son);
    const son2 = target.children[0];
    target.removeChild(son2);
    target.setAttribute('class', tag);
    target.append('Crear');
    target.removeAttribute('disabled');
    textEmail.setAttribute('class', 'opacity-1 font-bold text-red-700');
    console.log(target);
  }
};