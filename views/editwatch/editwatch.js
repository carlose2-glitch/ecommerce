const body = document.getElementById('body');


(async() => {

  const url = document.URL;
  const extractId = new URL(url).pathname.split('/')[2];


  try {
    const r = await axios.get('/api/personalitation');
    console.log(r);
    verificationIdProduct(extractId);
  } catch (error) {
    console.log(error.message);
    noScreen();
  }
})();

const verificationIdProduct = async (id) => {

  try {
    const r = await axios.get(`/api/editWatch/${id}`);
    firstScreen(r.data.get);

  } catch (error) {
    console.log(error.message);
  }

};


const firstScreen = (data) => {

  body.setAttribute('class', 'md:bg-slate-400 h-auto font-principal font-bold flex md:justify-center flex-col items-center');
  body.innerHTML = `   <div class="font-principal bg-slate-400 w-full h-12 text-white flex justify-center items-center">
      
      </div>
  <!-- para movil -->
  
  <main class="md:hidden w-full snap-x snap-mandatory h-auto scrollbar overflow-x-scroll bg-gradient-to-t from-gray-300 to-gray-500">
  
      <ul id="container-ul" class="flex max-w-[300%] w-[300%] h-[26rem]">
             
          <li class="list-none w-full flex justify-center snap-center">
              <img id="img1" src="${data.url1}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>
  
          <li id="box" class="list-none w-full flex justify-center snap-center">
              <img id="img2" src="${data.url2}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>
  
          <li class="list-none w-full flex justify-center snap-center">
              <img id="img3" src="${data.url2}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>
      </ul>
  
  </main>
  
  <div id="container-puntos" class="md:hidden flex justify-center gap-1 p-2">
      <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
      <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
      <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
  </div>
  
  <div class="bg-white w-full flex items-center flex-col md:hidden">
  
      <div class="w-11/12 flex flex-col gap-4">
          <div class="w-full h-8">
              <span class="text-slate-600">Marca:</span>
              <!-- bg-slate-400 -->
              <input type="text" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="brand-movile" value="${data.brand}">
          </div>
          
          <div class="flex flex-col">
              <span class="text-slate-600">Descripcion:</span>
              <textarea name="" class="outline-none resize-none" id="description-movile" rows="3" readonly>${data.description}</textarea>
              <!-- <input type="text" class="justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center" id="description-movile"> -->
          </div>
  
          <div class="w-full h-8">
              <span class="text-slate-600">Precio: $</span>
              <input type="text" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="price-movile" value="${data.price}">
          </div>
      
  
          <div class="flex justify-between text-slate-600 md:hidden h-10 w-full items-center gap-4">
              <p>Talla:</p>
             
              <div class="w-1/6">
  
                <button id="mm38-movile" class="border w-full rounded-md text-black bg-slate-500 p-4">38</button>
                <p id="s-select" class="hidden">${data.mm38}</p>
              
              </div>
  
              <div class="w-1/6">
               <button id="mm39-movile" class="border w-full rounded-md text-white bg-slate-500 p-4">39</button>
               <p id="m-select" class="hidden">${data.mm39}</p>
              
              </div>
  
             <div class="w-1/6">
             <button id="mm40-movile" class="border w-full rounded-md text-white bg-slate-500 p-4">40</button>
             <p id="l-select" class="hidden">${data.mm40}</p>
             
             </div>
            
            <div class="w-1/6">
             <button id="mm41-movile" class="border w-full rounded-md text-white bg-slate-500 p-4">41</button>
             <p id="xl-select" class="hidden">${data.mm41}</p>
            </div>          
          </div>
          
          <div class="w-full h-8">
              <span class="text-slate-600">Cantidad Talla:</span>
              <input type="number" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="amount-movile" value="${data.mm38}">
          </div>
  
          <div class="w-full h-8">
              <span class="text-slate-600">Cantidad Total:</span>
              <input type="number" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="amount-t-movile" value="${data.totalquanty}">
          </div>
      
          <div class="w-full flex justify-center">
              <button id="edit-movile" class="bg-[#3483fa] mt-8 w-40 rounded-md h-10 hover:scale-110 duration-300 text-white font-principal md:hidden mb-4">Editar</button>
  
          </div>
          
        
      </div>
      
     
  </div>
  
  
  <!-- para tamaño de pc -->
  <main class="hidden md:w-[90%] md:h-[28rem] border-[#b6b4b9] border bg-white md:rounded-md md:flex xl:w-[80rem]">
      
      <div id="collection-images" class="border w-[15%] h-full rounded-l-md border-[#b6b4b9] border-t-0 border-l-0 border-b-0">
          
          <div class="h-1/3 w-full">
            <img src="${data.url1}" class="w-full hover:scale-105 duration-300 cursor-pointer rounded-l-md h-full" alt="img" id="img1-pc">
          </div>
  
          <div class="h-1/3 w-full">
           <img src="${data.url2}" class="w-full hover:scale-105 duration-300 cursor-pointer h-full"  alt="img" id="img2-pc">
          </div>
  
          <div class="h-1/3 w-full">
           <img src="${data.url3}" class="w-full hover:scale-105 duration-300 cursor-pointer rounded-l-md h-full"  alt="img" id="img3-pc">
          </div>
  
      </div>
  
      <div class="border w-1/2 h-full flex justify-center border-t-0 border-l-0 border-b-0 border-[#b6b4b9]">
          <img id="imgt-pc" src="${data.url1}" alt="img" class="w-4/5 h-full">
      </div>
      <div class="border w-[35%] h-full rounded-r-md flex flex-col items-center" id="controllers-btn">
          <!-- <p class="h-[14%] w-full flex justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0">Marca</p> -->
          <input type="text" id="brand" class="h-[14%] w-full flex justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center" readonly value="${data.brand}">
          
          <textarea name="" id="description-pc" class="h-[14%] outline-none break-words w-full border flex justify-center items-center pl-4 resize-none border-[#b6b4b9] border-l-0 border-r-0 border-b-0 pr-3" readonly>${data.description}</textarea>
       
          <div class="h-[14%] w-full flex items-center justify-center border border-[#b6b4b9] border-l-0 border-r-0">
              <span class="w-auto">Precio: $</span>
              <input type="number" id="price-pc" readonly value="${data.price}" class="outline-none text-justify w-16 flex justify-center items-center">
          </div>
  
          <div class="h-[14%] border flex items-center w-full justify-center gap-4 border-[#b6b4b9] border-l-0 border-r-0 border-b-0">
              <p class="">Talla:</p>
              <button id="mm38"  class="border h-10 w-10 rounded-md text-black bg-slate-500  hover:scale-110 duration-300">
              <p class="flex justify-center">38</p>
              <p class="hidden">${data.mm38}</p>
              </button>
              <button id="mm39" class="border h-10 w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">
              <p class="flex justify-center">39</p>
              <p class="hidden">${data.mm39}</p>
              </button>
              <button id="mm40" class="border h-10 w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">
              <p class="flex justify-center">40</p>
              <p class="hidden">${data.mm40}</p>
              </button>
              <button id="mm41" class="border h-10 w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">
              <p class="flex justify-center">41</p>
              <p class="hidden">${data.mm41}</p>
              </button>
              <button id="t" class="border w-10 rounded-md text-white bg-slate-500 h-10 hover:scale-110 duration-300">T</button>
          </div>
  
          <div class="h-[14%] w-full flex items-center justify-center border border-[#b6b4b9] border-l-0 border-r-0">
              <span class="w-auto">Cantidad:</span>
              <input type="number" id="amount-pc" readonly value="${data.mm38}" class="[-webkit-appearance:none] outline-none text-justify w-16 flex justify-center items-center">
          </div>
         
        
          <div class="h-[14%] w-full flex items-center justify-center border border-[#b6b4b9] border-l-0 border-r-0">
              <span class="w-auto">Cantidad total:</span>
              <input type="text" id="amount-t-pc" readonly value="${data.totalquanty}" class="outline-none text-justify w-16 flex justify-center items-center">
          </div>
          
          <div class="flex items-center justify-center w-full h-[14%]">
              <button class="bg-[#3483fa] w-40 rounded-md h-10 hover:scale-110 duration-300 text-white font-principal" id="edit">Editar</button>
          </div>
         
      </div>
  </main>`;


  //declaracion y asingnacion de valores de las imagenes movile para poder realizar el scroll

  const containerPuntos = document.getElementById('container-puntos');
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');

  const arrayMobile = [img1.id, img2.id, img3.id];



  const cargarImagen = (e , o) => {

    if(e[0].isIntersecting){

      for(let i =0; i < 3; i++){
        if(e[0].target.id === arrayMobile[i]){
          containerPuntos.children[i].removeAttribute('class');
          containerPuntos.children[i].setAttribute('class', 'w-4 h-4 bg-cyan-200 opacity-50 rounded-lg');
        }else{
          containerPuntos.children[i].removeAttribute('class');
          containerPuntos.children[i].setAttribute('class', 'w-4 h-4 bg-gray-200 opacity-50 rounded-lg');
        }
      }
    }

  };

  const observer = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold:1.0
  });

  observer.observe(img1);
  observer.observe(img2);
  observer.observe(img3);

  const colletionImages = document.getElementById('collection-images');
  const imageP = document.getElementById('imgt-pc');
  //iteracion con las imagenes cuando el usuario hace click se encarga de poner la imagen del lado del tamaño grande
  colletionImages.addEventListener('click', e => {
    //console.log(e.target.src);

    imageP.src = e.target.src;

  });


  //funcion de modificacion de los inputs
  const edit = document.getElementById('edit');

  edit.addEventListener('click', e => {
    //console.log(e.target.parentElement.parentElement.children[0]);
    //console.log(e.target.parentElement.parentElement.children[1]);
    //console.log(e.target.parentElement.parentElement.children[2].children[1]);
    //console.log(e.target.parentElement.parentElement.children[4].children[1]);
    editInputAndSave(e.target, data);
  });

  //botones de la seleccionde de las tallas
  const mm38 = document.getElementById('mm38');
  const mm39 = document.getElementById('mm39');
  const mm40 = document.getElementById('mm40');
  const mm41 = document.getElementById('mm41');
  const t = document.getElementById('t');
  const amountPc = document.getElementById('amount-pc');



  t.addEventListener('click', e => {

    if(mm38.children[0].attributes[0].nodeValue.includes('flex')){

      mm38.children[0].setAttribute('class', 'hidden');
      mm38.children[1].setAttribute('class', 'flex justify-center');
      mm39.children[0].setAttribute('class', 'hidden');
      mm39.children[1].setAttribute('class', 'flex justify-center');
      mm40.children[0].setAttribute('class', 'hidden');
      mm40.children[1].setAttribute('class', 'flex justify-center');
      mm41.children[0].setAttribute('class', 'hidden');
      mm41.children[1].setAttribute('class', 'flex justify-center');

    }else{
      mm38.children[0].setAttribute('class', 'flex justify-center');
      mm38.children[1].setAttribute('class', 'hidden');
      mm39.children[0].setAttribute('class', 'flex justify-center');
      mm39.children[1].setAttribute('class', 'hidden');
      mm40.children[0].setAttribute('class', 'flex justify-center');
      mm40.children[1].setAttribute('class', 'hidden');
      mm41.children[0].setAttribute('class', 'flex justify-center');
      mm41.children[1].setAttribute('class', 'hidden');

    }

  });
  //iteracion de los botones en las tallas
  mm38.addEventListener('click', e => {
    amountPc.value = mm38.children[1].textContent;

    colorBlack(mm38, mm39, mm40, mm41);
    //console.log(s.children[0]);
  });
  mm39.addEventListener('click', e => {
    amountPc.value = mm39.children[1].textContent;
    colorBlack(mm39, mm38, mm40, mm41);
  });
  mm40.addEventListener('click', e => {
    amountPc.value = mm40.children[1].textContent;
    colorBlack(mm40, mm38, mm39, mm41);
  });
  mm41.addEventListener('click', e => {
    amountPc.value = mm41.children[1].textContent;
    colorBlack(mm41, mm39, mm38, mm40);
  });

  const editMovile = document.getElementById('edit-movile');

  editMovile.addEventListener('click', e => {
    e.preventDefault();

    editInputsMovile(e, data);
  });


  const mm38Movile = document.getElementById('mm38-movile');
  const mm39Movile = document.getElementById('mm39-movile');
  const mm40Movile = document.getElementById('mm40-movile');
  const mm41Movile = document.getElementById('mm41-movile');
  const amountMmovile = document.getElementById('amount-movile');

  mm38Movile.addEventListener('click', e => {
    amountMmovile.value = mm38Movile.parentElement.children[1].textContent;
    colorBlackMovile(mm38Movile, mm39Movile, mm40Movile, mm41Movile);
  });

  mm39Movile.addEventListener('click', e => {
    amountMmovile.value = mm39Movile.parentElement.children[1].textContent;
    colorBlackMovile(mm39Movile, mm38Movile, mm40Movile, mm41Movile);
  });

  mm40Movile.addEventListener('click', e => {
    amountMmovile.value = mm40Movile.parentElement.children[1].textContent;
    colorBlackMovile(mm40Movile, mm38Movile, mm39Movile, mm41Movile);
  });

  mm41Movile.addEventListener('click', e => {
    amountMmovile.value = mm41Movile.parentElement.children[1].textContent;
    colorBlackMovile(mm41Movile, mm38Movile, mm40Movile, mm39Movile);
  });


};

const colorBlack = (a, b, c, d) => {

  const array = [a, b, c, d];

  for(let value in array){

    if(value === '0'){
      array[value].setAttribute('class', 'border h-10 w-10 rounded-md text-black bg-slate-500  hover:scale-110 duration-300');

    }else{
      array[value].setAttribute('class', 'border h-10 w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300');
    }
  }

};


const colorBlackMovile = (a, b, c, d) => {

  const array = [a, b, c, d];

  for(let value in array){

    if(value === '0'){
      array[value].setAttribute('class', 'border w-full rounded-md text-black bg-slate-500 p-4');

    }else{
      array[value].setAttribute('class', 'border w-full rounded-md text-white bg-slate-500 p-4');
    }
  }


};

const noScreen = () => {

  body.setAttribute('class', 'md:bg-[#6980a2] h-screen font-principal font-bold flex justify-center items-center');
  body.innerHTML = `<h1 class="text-red-600">Not Found 404</h1>
     `;
};