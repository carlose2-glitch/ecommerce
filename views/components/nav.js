const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('nav-hamburguer');
const items = document.getElementById('items');
const box = document.getElementById('box');


//funcion para mostrar el contenido del menu de hamburguesa
hamburguer.addEventListener('click', e => {

  //items.removeAttribute('class');
  items.setAttribute('class','fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 flex justify-center items-center');
});

//funcion para desaparecer el menu de hamburguesa

items.addEventListener('click', e => {

  const click = e.target.id;

  if(click === 'items'){
    items.removeAttribute('class');
    items.setAttribute('class','hidden inset-0 bg-gradient-to-b from-white/70 to-black/70 flex justify-center items-center');
  }

});