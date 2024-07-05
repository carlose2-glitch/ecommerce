//muestra los productos seleccionados
const showProducts = async (spanish) => {
  console.log(spanish);
  const main = document.createElement('main');
  main.setAttribute('class', 'flex gap-4 h-auto w-full justify-center flex-wrap');

  const getProducts = await productsGet(spanish);//obtiene los productos de la base de datos
  //console.log(getProducts);
  //evalua si hay un producto por esta categoria
  if(getProducts.length > 0){
    //ciclo para guardar las imagenes
    getProducts.forEach(element => {
      //console.log(element);
      //let separateUrl1 = element.url1.split('/')[5];
      //console.log(separateUrl1);
      main.innerHTML += `
  
        <div class="flex flex-col gap-4 items-center pb-4 bg-slate-200 hover:scale-105 duration-300 mb-4 rounded-lg">
    <img id="${element._id}" src="${element.url1}" class="w-full md:h-80 h-60 rounded" alt="img">
    <input type="text" class="bg-slate-200 text-center outline-none font-principal font-bold" value="${element.description}" readonly>

    <input type="text" class="bg-slate-200 text-center outline-none font-principal font-bold" value="$${element.price}" readonly>
   
    <input type="text" class="bg-slate-200 text-center outline-none font-principal font-bold" value="${element.totalquanty} Unidades" readonly>
    <button class="bg-green-800 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold font-principal">Editar</button>
    <button class="bg-red-700 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold font-principal">Borrar producto</button>
    </div>`;
      //<a href="../editproduct/index.html"></a>
      //<input type="submit"></input>
      //<button class="bg-green-800 w-56 h-12 rounded-lg hover:scale-110 duration-300 text-white font-bold font-principal">Editar</button>
      // <input type="number" class="bg-slate-200 text-center outline-none font-principal font-bold" value="${element.price}" readonly>
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
