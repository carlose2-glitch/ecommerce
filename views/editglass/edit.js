const body = document.getElementById('body');


(async() => {

  const url = document.URL;
  const extractId = new URL(url).pathname.split('/')[2];

  try {
    const search = await axios.get('/api/personalitation');
    console.log(search);
    verificationIdProduct(extractId);
  } catch (error) {
    console.log(error.message);
    noScreen();

  }

})();
//verifica si esta el producto con ese id

const verificationIdProduct = async (id) => {

  try {
    const r = await axios.get(`/api/editGlass/${id}`);
    firstScreen(r.data.get);

  } catch (error) {
    console.log(error.message);
  }

};

//mostrar producto
const firstScreen = (data) => {
  body.setAttribute('class', 'md:bg-slate-400 h-auto font-principal font-bold flex md:justify-center flex-col items-center');
  body.innerHTML = ` <div class="font-principal bg-slate-400 w-full h-12 text-white flex justify-center items-center">
    
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

              <button id="s-movile" class="border w-full rounded-md text-black bg-slate-500 p-4">S</button>
              <p id="s-select" class="hidden">${data.s}</p>
            
            </div>

            <div class="w-1/6">
             <button id="m-movile" class="border w-full rounded-md text-white bg-slate-500 p-4">M</button>
             <p id="m-select" class="hidden">${data.m}</p>
            
            </div>

           <div class="w-1/6">
           <button id="l-movile" class="border w-full rounded-md text-white bg-slate-500 p-4">L</button>
           <p id="l-select" class="hidden">${data.l}</p>
           
           </div>
          
          <div class="w-1/6">
           <button id="xl-movile" class="border w-full rounded-md text-white bg-slate-500 p-4">XL</button>
           <p id="xl-select" class="hidden">${data.xl}</p>
          </div>          
        </div>
        
        <div class="w-full h-8">
            <span class="text-slate-600">Cantidad Talla:</span>
            <input type="number" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="amount-movile" value="${data.s}">
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
           <select name="" id="selectT" title="ancho entre visagra y visagra" class="outline-none justify-end flex text-right">
                <option id="width1" value="width1" selected>${data.width1} mm</option>
                <option id="width2" value="width2">${data.width2} mm</option>
                <option id="width3" value="width3">${data.width3} mm</option>
            </select>
        </div>

        <div class="h-[14%] w-full flex items-center justify-center border border-[#b6b4b9] border-l-0 border-r-0">
               <span class="w-auto pl-2">Cantidad: </span>
            <input type="number" id="amount-pc" readonly value="${data.total1}" class="[-webkit-appearance:none] outline-none text-center w-1/6 flex justify-center items-center">
              <input type="text" class="hidden" id="t1" value="${data.total1}">
              <input type="text" class="hidden" id="t2" value="${data.total2}">
              <input type="text" class="hidden" id="t3" value="${data.total3}" >
             <span class="w-auto">Patillas: </span>
               <input type="number" id="sideburns" readonly value="${data.sideburns1}" class="[-webkit-appearance:none] outline-none text-center w-1/6 flex justify-center items-center">
                <span class="w-auto">Puente: </span>
               <input type="number" id="bridge" readonly value="${data.bridge1}" class="[-webkit-appearance:none] outline-none  w-1/6 flex justify-center text-center items-center">
             

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


  //funcion de seleccionar la talla de las gafas
  const amountPc = document.getElementById('amount-pc');
  const sideburns = document.getElementById('sideburns');
  const bridge = document.getElementById('bridge');

  const t1 = document.getElementById('t1');
  const t2 = document.getElementById('t2');
  const t3 = document.getElementById('t3');

  const select = document.getElementById('selectT');

  select.addEventListener('click', e => {

    if(e.target.value === 'width1'){

      amountPc.value = t1.value;
      sideburns.value = data.sideburns1;
      bridge.value = data.bridge2;

    }
    if(e.target.value === 'width2'){
      amountPc.value = t2.value;
      sideburns.value = data.sideburns2;
      bridge.value = data.bridge2;
    }
    if(e.target.value === 'width3'){
      amountPc.value = t3.value;
      sideburns.value = data.sideburns3;
      bridge.value = data.bridge3;
    }
    //console.log(Object.keys(data));
  });

  //boton de editar
  const edit = document.getElementById('edit');

  edit.addEventListener('click', e => {
    e.preventDefault();

    editInputs(e.target, data);
  });



};

//si no encuentra el token pasa por aca
const noScreen = () => {

  body.setAttribute('class', 'md:bg-[#6980a2] h-screen font-principal font-bold flex justify-center items-center');
  body.innerHTML = `<h1 class="text-red-600">Not Found 404</h1>
   `;
};