const getInformationn = () => {

  body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-screen gap-8');

  body.innerHTML = ` <button id="stadistics" class="text-white font-bold hover:scale-110 duration-300 bg-slate-800 rounded-lg h-12 w-48 cursor-pointer">Estadisticas de ventas</button>
    <button id="shirts" class="text-white font-bold hover:scale-110 duration-300 bg-slate-800 rounded-lg h-12 w-48 cursor-pointer">Camisas</button>
    <button id="watch" class="text-white font-bold hover:scale-110 duration-300 bg-slate-800 rounded-lg h-12 w-48 cursor-pointer">Relojes</button>
    <button id="glasses" class="text-white font-bold hover:scale-110 duration-300 bg-slate-800 rounded-lg h-12 w-48 cursor-pointer">Lentes</button>
    <button id="bracelets" class="text-white font-bold hover:scale-110 duration-300 bg-slate-800 rounded-lg h-12 w-48 cursor-pointer">Pulseras</button>
    <button id="caps" class="text-white font-bold hover:scale-110 duration-300 bg-slate-800 rounded-lg h-12 w-48 cursor-pointer">Gorras</button>
    <button id="close" class="text-white font-bold hover:scale-110 duration-300 bg-red-700 rounded-lg h-12 w-48 cursor-pointer">Cerrar sesion</button>
`;
};

//eventos de los botones categorias, estadisticas, y cerrar cesion

body.addEventListener('click', e => {
  const editarBorrarUpdate = e.target.textContent;
  const action = e.target.id;
  //hacer click en cualquiera de los productos
  if(action === 'shirts' || action === 'watch' || action === 'glasses' || action === 'bracelets' || action === 'caps'){
    const array = [
      {
        english: 'shirts',
        spanish: 'Camisas' },
      {
        english: 'watch',
        spanish: 'Relojes' },
      {
        english: 'glasses',
        spanish: 'Lentes' },
      {
        english: 'bracelets',
        spanish:'pulseras' },
      {
        english: 'caps',
        spanish: 'Gorras'
      } ];
    const elementSaved = array.find((Element) => Element.english === action);

    showProducts(elementSaved.spanish);//showProducts.js
  }

  //hacer click en las estadisticas
  if(action === 'stadistics'){
    console.log('estadisticas');
  }
  //hacer click en cerrar sesion
  if(action === 'close'){
    closeSection();
  }


  //agregar prducto
  if(action === 'addproduct'){
    addProduct(e.target.parentElement.children[0].textContent);//adProduct.js
  }
  //editar producto
  if(editarBorrarUpdate === 'Editar'){
    editProduct(e.target);//personalitation.js
  }
  //actualizar producto
  if(editarBorrarUpdate === 'Guardar'){
    UpdateProduct(e.target);//personalitation.js
  }

  if(editarBorrarUpdate === 'Borrar producto'){
    deleteProduct(e.target);//deleteProduct.js
  }

});

//funcion para eliminar la cookie y cerrar cesion
const closeSection = async () => {
  const deleteCookie = await axios.get('/api/deleteCookie');
  console.log(deleteCookie);
  location.reload();
};