const eventHamburguer = ( ) => {
  const hamburguer = document.getElementById('hamburguer');
  const nav = document.getElementById('nav-hamburguer');
  const items = document.getElementById('items');
  const box = document.getElementById('box');
  const user = document.getElementById('user');
  const userPc = document.getElementById('user-pc');
  const menuHamburguerUser = document.getElementById('menu-hamburguer-user');
  const span = document.getElementById('span');
  //const signUpPc = document.getElementById('signup-pc');
  //const createAccountPc = document.getElementById('create_account-pc');
  //funcion para mostrar el contenido del menu de hamburguesa
  hamburguer.addEventListener('click', e => {

    //items.removeAttribute('class');
    items.setAttribute('class','fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 flex justify-center items-center z-10');
  });

  //funcion para desaparecer el menu de hamburguesa

  items.addEventListener('click', e => {

    const click = e.target.id;

    if(click === 'items'){
      items.removeAttribute('class');
      items.setAttribute('class','hidden');
    }

  });
  //eventos del menu del usuario

  userPc.onmouseover = (e) => {
    menuHamburguerUser.setAttribute('class', 'animate-menuh w-44 ml-[-7.5rem] h-auto bg-white absolute mt-10 flex flex-col items-center z-20 rounded-md border-2');
    span.setAttribute('class', 'h-3 w-3 cursor-pointer border-black border-2 mr-2 origin-center rotate-45 border-r-0 border-b-0');
  };
  userPc.onmouseleave = (e) => {

    menuHamburguerUser.setAttribute('class', 'w-44 ml-[-7.5rem] h-auto bg-white absolute mt-10 hidden flex-col items-center rounded-md border-2');
    span.setAttribute('class', 'h-3 w-3 cursor-pointer border-black border-2 mr-2 origin-center rotate-45 border-t-0 border-l-0');


  };

  menuHamburguerUser.onmouseover = (e) => {
    menuHamburguerUser.setAttribute('class', 'animate-menuh w-44 ml-[-7.5rem] h-auto bg-white absolute mt-10 flex flex-col items-center z-20 rounded-md border-2');
    span.setAttribute('class', 'h-3 w-3 cursor-pointer border-black border-2 mr-2 origin-center rotate-45 border-r-0 border-b-0');
  };
  menuHamburguerUser.onmouseleave = (e) => {

    menuHamburguerUser.setAttribute('class', 'w-44 ml-[-7.5rem] h-auto bg-white absolute mt-10 hidden flex-col items-center z-[1] rounded-md border-2');
    span.setAttribute('class', 'h-3 w-3 cursor-pointer border-black border-2 mr-2 origin-center rotate-45 border-t-0 border-l-0');

  };
};