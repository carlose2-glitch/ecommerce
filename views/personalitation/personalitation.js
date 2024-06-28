

const body = document.getElementById('body');

const reader = new FileReader();

const imageDefect = 'https://i.pinimg.com/564x/52/a0/05/52a00533460fc8b74576209dd3d2c8de.jpg';

(async () => {

  const getInformation = await axios.get('/api/personalitation');

  if(getInformation.data.data === 'yes'){
    //cuando el token no esta vencido
    getInformationn();
  }else{
    //si el token esta vencido
    notFound();
  }
})();


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



const notFound = () => {
  console.log('token vencido');
  body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-screen gap-8');
  body.innerHTML = ' <h1 class="text-red-600 font-bold">ERROR 404 NOT FOUND</h1>';
};


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

    showProducts(elementSaved.spanish);
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
    addProduct();
  }
  //editar producto
  if(editarBorrarUpdate === 'Editar'){
    editProduct(e.target);
  }
  //actualizar producto
  if(editarBorrarUpdate === 'Guardar'){
    UpdateProduct(e.target);
  }

  if(editarBorrarUpdate === 'Borrar producto'){
    deleteProduct(e.target);
  }

});
//funcion para eliminar la cookie
const closeSection = async () => {
  const deleteCookie = await axios.get('/api/deleteCookie');
  console.log(deleteCookie);
  location.reload();
};

const editProduct = async (product) => {
  // id del producto para buscar en la base de datos
  const idProduct = product.parentElement.children[0].id;
  window.location.href = `../editproduct/${idProduct}`;
  //const edit = await axios.get(`/api/edit/${idProduct}`);
  //console.log(edit);
  /* product.setAttribute('class', 'bg-green-800 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold');
  product.textContent = 'Guardar';
  let i = 1;

  while(i <= 3){
    product.parentElement.children[i].removeAttribute('readonly');
    product.parentElement.children[i].setAttribute('class', 'bg-slate-100 text-center outline-none');
    i++;
  }*/

};

const UpdateProduct = async (product) => {
  // console.log(product.parentElement.parentElement.parentElement.children[0].textContent.toLowerCase());
  console.log(product.parentElement.children[1].value);
  console.log(product.parentElement.children[2].value);
  console.log(product.parentElement.children[3].value);

  //console.log(product.parentElement.children[0].id);
  const data = {
    id:product.parentElement.children[0].id,
    description: product.parentElement.children[1].value,
    price:product.parentElement.children[2].value,
    amount: product.parentElement.children[3].value
  };
  let i = 1;
  while(i <= 3){
    product.parentElement.children[i].setAttribute('readonly', '');
    product.parentElement.children[i].setAttribute('class', 'bg-slate-200 text-center outline-none');
    i++;
  }

  try {
    const updateDb = await axios.post('/api/updateDb', data);
    console.log(updateDb);
  } catch (error) {
    console.log(error);
  }


  product.textContent = 'Editar';
};

const deleteProduct = (product) => {

  const id = product.parentElement.children[0].id;
  const category = product.parentElement.parentElement.parentElement.children[0].textContent.toLowerCase();

  body.innerHTML += ` <main class="fixed top-0 flex items-center justify-center flex-col w-full h-screen bg-slate-500/65 rounded-md gap-8">

 <div class="flex items-center justify-center flex-col w-96 h-40 animate-bouncetwo bg-slate-200 rounded-md gap-8">
    <h2 class="text-red-600 font-bold">¿Esta seguro que quiere borrar el producto?</h2>
    <div class="flex gap-8">
     <button id="delete-product" class="text-white bg-slate-500 hover:scale-125 transition duration-300 w-16 h-12 rounded-md font-bold">Si</button>
     <button id="no-delete" class="text-gray-700 bg-lime-400 w-16 h-12 hover:scale-125 transition duration-300 rounded-md font-bold">No</button>
    </div>
   
  </div>
   </main>`;

  const deleteProduct = document.getElementById('delete-product');

  deleteProduct.addEventListener('click', async e => {
    e.preventDefault();

    const urls = await removeProduct(id);
    console.log(urls);
    // const removeUrl = await removeUrls(urls);
    //console.log(removeUrl);
    console.log(e.target.parentElement);
    e.target.parentElement.innerHTML = '<svg class="animate-spinn h-5 w-5 rounded-xl mx-2 border-2 border-indigo-700 border-r-white"></svg><p class="text-gray-700 font-bold mr-2"> Cargando...</p>';
    setTimeout(() => {
      showProducts(category);
    }, 3000);


  });



  const noDelete = document.getElementById('no-delete');
  noDelete.addEventListener('click', e => {
    e.preventDefault();
    showProducts(category);

  });

};

//borrar producto
const removeProduct = async (product) => {
  const data = {
    id:product
  };

  try {

    const response = await axios.post('/api/deleteProduct', data);

    return { url1:response.data.url1delete, url2: response.data.url2delete, url3:response.data.url3delete };
  } catch (error) {
    console.log(error.message);
  }
};

//muestra los productos seleccionados
const showProducts = async (spanish) => {
  console.log(spanish);
  const main = document.createElement('main');
  main.setAttribute('class', 'flex gap-4 h-auto w-full justify-center flex-wrap');

  const getProducts = await productsGet(spanish);
  //console.log(getProducts);

  //evalua si hay un producto por esta categoria
  if(getProducts.length > 0){
    //ciclo para guardar las imagenes
    getProducts.forEach(element => {
      console.log(element);
      let separateUrl1 = element.url1.split('/')[5];
      //console.log(separateUrl1);

      main.innerHTML += `

      <div class="flex flex-col gap-4 items-center pb-4 bg-slate-200 hover:scale-105 duration-300 mb-4 rounded-lg">
  <img id="${element._id}" src="${element.url1}" class="w-full md:h-80 h-60 rounded" alt="img">
  <input type="text" class="bg-slate-200 text-center outline-none font-principal font-bold" value="${element.description}" readonly>
  <input type="number" class="bg-slate-200 text-center outline-none font-principal font-bold" value="${element.price}" readonly>
  <input type="number" class="bg-slate-200 text-center outline-none font-principal font-bold" value="${element.amount}" readonly>
  <button class="bg-green-800 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold font-principal">Editar</button>
  <button class="bg-red-700 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold font-principal">Borrar producto</button>
  </div>`;
      //<a href="../editproduct/index.html"></a>
      //<input type="submit"></input>
      //<button class="bg-green-800 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold font-principal">Editar</button>
    });
    // <form action="../editproduct/index.html"></form>
    //<a href=""></a>
    //<button class="bg-green-800 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold font-principal">Editar</button>
  }else{

    main.innerHTML = `<div class="flex flex-col gap-4 items-center">
    <p class="text-red-600 font-bold">No hay producto de esta categoria</p>
  </div>`;

  }

  //https://drive.google.com/uc?id=19OxqrZmFxR2TOnwExa3rzCZEUlSvEWKL
  //https://drive.google.com/uc?export=view&id=19OxqrZmFxR2TOnwExa3rzCZEUlSvEWKL
  //https://lh3.googleusercontent.com/d/19OxqrZmFxR2TOnwExa3rzCZEUlSvEWKL=s50 este si sin el s=50
  body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-auto gap-8');

  body.innerHTML = `<h1 class="font-bold text-4xl">${spanish}</h1>
  <button id="addproduct" class="bg-slate-600 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold">Agregar producto</button>
  <button id="return-products" class="bg-red-600 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold">Regresar</button>

  
  `;
  body.appendChild(main);

  //regresar a seleccionar el tipo de producto
  const returnProducts = document.getElementById('return-products');
  returnProducts.addEventListener('click', e => {
    e.preventDefault();
    getInformationn();
  });
  //editar el producto



};
//obtiene los productos de la base de datos
const productsGet = async (category) => {


  const products = await axios.post('/api/getProducts', { category });
  return products.data.get;
};


//screen del formulario para agregar productos en la tienda
const addProduct = () => {

  body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-auto gap-8');

  body.innerHTML = ` <h1 class='text-4xl font-bold pt-8'>Agregar producto</h1>
  <main class="pb-8 w-full flex justify-center items-center">
 <form action="" class="flex flex-col items-center gap-4 w-[90%]" id="form_data">

  <div class="flex gap-4 justify-center items-center flex-wrap">

    <div class="flex flex-col gap-4">
     <img src="${imageDefect}" id='image-upload' class="w-[20rem] rounded-lg h-60" alt="img">
     <input id='input-file' class="cursor-pointer block w-full text-sm text-slate-500
     file:mr-4 file:py-2 file:px-4
     file:rounded-full file:border-0
     file:text-sm file:font-semibold
     file:bg-violet-50 file:text-green-700
     hover:file:bg-violet-100" id='upload-image' type="file" name="imgfile" accept="image/png, image/jpeg" />
  
    </div>
  
    <div  class="flex flex-col gap-4">
      <img src="${imageDefect}" id='image-upload_front' class="w-[20rem] rounded-lg h-60" alt="img">
      <input id='input-file_front' class="cursor-pointer block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-green-700
      hover:file:bg-violet-100" id='upload-image' type="file" name="imgfile" accept="image/png, image/jpeg" />
    </div>
  
    <div  class="flex flex-col gap-4">
      <img src="${imageDefect}" id='image-upload_personatilation' class="w-[20rem] rounded-lg h-60" alt="img">
      <input id='input-file_personalitation' class="cursor-pointer block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-green-700
      hover:file:bg-violet-100" id='upload-image' type="file" name="imgfile" accept="image/png, image/jpeg" />
    </div>
  


  </div>

  

   

   
   <select name="" id="category-text" class="rounded-lg outline-none pl-4 w-80 pr-4 text-slate-400">
   <option value="" selected>Categoria</option>
  <option value="pulseras">pulseras</option>
  <option value="camisas">camisas</option>
  <option value="relojes">relojes</option>
  <option value="gorras">gorras</option>
  <option value="lentes">lentes</option>
 </select>
   <input id="marca" type="text" placeholder="marca" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <input id="descripcion" type="text" placeholder="descripcion del producto" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <input id="tallas" type="number" placeholder="Cantidad Talla S" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <input id="tallam" type="number" placeholder="Cantidad Talla M" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <input id="talll" type="number" placeholder="Cantidad Talla L" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <input id="tallxl" type="number" placeholder="Cantidad Talla XL" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <input id="precio" type="number" placeholder="precio" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <input id="cantidad" type="number" placeholder="cantidad total" class="rounded-lg outline-none pl-4 pr-4 w-80">
   <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="addProductbtn">Agregar</button>
 </form>
  </main>`;
  //<input id="category-text" type="text" placeholder="categoria" class="rounded-lg outline-none pl-4 w-80 pr-4"></input>
  const imageUpload = document.getElementById('image-upload');
  const imageFront = document.getElementById('image-upload_front');
  const imageUploadPersonalitation = document.getElementById('image-upload_personatilation');

  const inputFile = document.getElementById('input-file');
  const inputFileFront = document.getElementById('input-file_front');
  const inputFilePersonalitation = document.getElementById('input-file_personalitation');

  //formData3.append(formData2);
  //funciones para que usuario vea las imagenes en el programa
  inputFile.addEventListener('change', e => {

    //const reader = new FileReader();

    if(e.target.files[0]){

      reader.onload = function ( e ) {
        imageUpload.src = e.target.result;

      };
      console.log(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);

    }else{
      imageUpload.src = imageDefect;
    }

  });

  inputFileFront.addEventListener('change', e => {
    console.log('front');
    // const reader = new FileReader();

    if(e.target.files[0]){
      console.log('true');
      reader.onload = function ( e ) {
        imageFront.src = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);

    }else{

      imageFront.src = imageDefect;
    }

  });

  inputFilePersonalitation.addEventListener('change', e => {

    //const reader = new FileReader();
    //url = URL.createObjectURL(e.target.files[0]);

    if(e.target.files[0]){

      reader.onload = function ( e ) {
        imageUploadPersonalitation.src = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);

    }else{
      imageUploadPersonalitation.src = imageDefect;
    }

  });

  const addProductBtn = document.getElementById('addProductbtn');
  const categoryText = document.getElementById('category-text');
  const brand = document.getElementById('marca');
  const description = document.getElementById('descripcion');
  const price = document.getElementById('precio');
  const cantidad = document.getElementById('cantidad');
  const talla = document.getElementById('talla');

  //evento click o enter del formulario una vez que todo los requerimientos esten llenos pasa por aqui
  const form = document.getElementById('form_data');

  form.addEventListener('submit', async e => {
    e.preventDefault();


    let booleanimages = false;
    let booleantexts = false;

    //evalua si las imagenes cargadas son correctas
    if(inputFile.files[0] && inputFileFront.files[0] && inputFilePersonalitation.files[0]){
      console.log('si');
      booleanimages = true;
    }else{
      console.log('no');
      booleanimages = false;
    }
    //evalua si lo que esta escrito para llenar el formulario es correcto
    if(categoryText.value.trim() && brand.value.trim() && description.value.trim() && talla.value.trim() && price.value.trim() && cantidad.value.trim()){
      console.log('si verdad');
      booleantexts = true;
    }else{
      console.log('falso');
      booleantexts = false;
    }

    if(booleanimages && booleantexts){//si las imagenes y los textos son cargados de manera correcta pasa por aca
      console.log('verdadero');
      addProductBtn.setAttribute('disabled', '');
      addProductBtn.setAttribute('class', 'flex bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72 justify-center items-center');
      addProductBtn.innerHTML = '<svg class="animate-spinn h-5 w-5 rounded-xl mx-2 border-2 border-indigo-400 border-r-white"></svg><p class="text-white mr-2"> Cargando...</p>';
      //crear url de las imagenes
      const getUrlImages = await urlImages(inputFile.files[0], inputFileFront.files[0], inputFilePersonalitation.files[0]);
      console.log(getUrlImages);
      const data = {
        cate: categoryText.value,
        brand: brand.value,
        de: description.value,
        t: talla.value,
        p: price.value,
        cant: cantidad.value,
        url1: getUrlImages[0].url,
        url2: getUrlImages[1].url,
        url3: getUrlImages[2].url,

      };

      try {
        const saveDb = await axios.post('/api/saveDb', data);
        console.log(saveDb);

      } catch (error) {
        console.log(error.message);
      }

      body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-screen gap-8');
      body.innerHTML = `<h1 class="font-bold text-green-600 text-5xl" >Producto agregado con exito</h1>
      <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="returnProduct">Regresar</button>`;



      const returnProduct = document.getElementById('returnProduct');

      returnProduct.addEventListener('click', e => {
        e.preventDefault();
        getInformationn();

      });


    }else{
      {
        //funcion que se encarga de subrayar los bordes de rojo en dado caso que haya algun formulario vacio
        evalueform(inputFile, inputFileFront, inputFilePersonalitation, categoryText, brand, description, talla, price, cantidad);
      }

    }
  });

};


//funcion para extraer la url de cada imagen
const urlImages = async (img1, img2, img3) => {

  const array = [img1, img2, img3];
  const arrayUrls = [
    {
      url:'',
      urldelete:'',
    },
    {
      url:'',
      urldelete:'',
    },
    {
      url:'',
      urldelete:'',
    }

  ];

  for(let value in array){
    const urlAndDelete = await saveUrl(array[value]);
    console.log(urlAndDelete);
    arrayUrls[value].url = urlAndDelete.data.url;
    arrayUrls[value].urldelete = urlAndDelete.data.delete_url;
  }
  return arrayUrls;

};

const saveUrl = async (fileImg) => {
  let dataForm = new FormData();
  dataForm.append('image', fileImg);

  try {

    const res = await fetch('https://api.imgbb.com/1/upload?key=0b1a31cbfe85b3f042616c896bc626ee',{
      method: 'POST',
      body: dataForm
    });
    return res.json();
  } catch (error) {
    return error.message;
  }
};



const evalueform = (images, imagesfront, imagepersonalitation, category, brand, description, talla, price, cantidad)  => {

  imagesverification(images, imagesfront, imagepersonalitation);
  textverification(category, brand, description, talla, price, cantidad);

};

//se encarga de marcar de color rojo las imagenes que no esten cargadas
const imagesverification = (images, ifront, ip) => {

  const  array= [images, ifront, ip];
  for(let value of array){
    if(!value.files[0]){
      value.parentElement.children[0].setAttribute('class', 'w-[20rem] rounded-lg h-60 border-2 border-rose-500');
    }
  }

};
//se encarga de marcar en color rojo los textos del formulario
const textverification = (category, brand, description, talla, price, cantidad) => {
  const array = [brand, description, talla, price, cantidad];
  for(let value of array){
    if(!value.value.trim()){
      value.setAttribute('class', 'rounded-lg outline-none pl-4 pr-4 w-80 border-2 border-rose-500');
    }
  }
  if(!category.value.trim()){
    category.setAttribute('class', 'rounded-lg outline-none pl-4 w-80 pr-4 text-slate-400 border-2 border-rose-500');
  }
};

// se encarga de darles los estilos nuevamente a las etiquetas apenas se escribe un input
body.addEventListener('input', e => {


  const arrayInput = ['category-text', 'marca', 'descripcion', 'talla', 'precio', 'cantidad', 'input-file', 'input-file_front', 'input-file_personalitation'];

  const find = arrayInput.find(element => element === e.target.id);
  if(find !== undefined){

    const image1 = body.children[1].children[0].children[0].children[0].children[0];
    const image2 = body.children[1].children[0].children[0].children[1].children[0];
    const image3 = body.children[1].children[0].children[0].children[2].children[0];
    const category = body.children[1].children[0].children[1];
    const brand = body.children[1].children[0].children[2];
    const description = body.children[1].children[0].children[3];
    const talla = body.children[1].children[0].children[4];
    const price = body.children[1].children[0].children[5];
    const cantidad = body.children[1].children[0].children[6];


    const array = [image1, image2, image3];

    for (let value of array){
      value.setAttribute('class', 'w-[20rem] rounded-lg h-60');
    }
    const array2 = [brand, description, talla, price, cantidad];

    category.setAttribute('class', 'rounded-lg outline-none pl-4 w-80 pr-4 text-slate-400');

    for(let value of array2){
      value.setAttribute('class', 'rounded-lg outline-none pl-4 pr-4 w-80');
    }

  }else{
    //console.log(e.target.value);
  }


  //body.children[1].children[0].children[0].children[0].children[0].setAttribute('class', 'w-[20rem] rounded-lg h-60');

});

