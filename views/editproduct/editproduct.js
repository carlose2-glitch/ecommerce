





const body = document.getElementById('body');
(async () => {

  const url = document.URL;
  const urlObject = new URL(url).pathname.split('/')[2];

  const getInformation = await axios.get('/api/personalitation');

  const extractProduct = await axios.get(`/api/edit/${urlObject}`);

  console.log(extractProduct.data.extract);

  if(getInformation.data.data === 'yes'){
    firstScreen();
  }else{
    noScreen();
    console.log('no');
  }
})();
//imprime el screen principal
const firstScreen = () => {
  body.setAttribute('class', 'md:bg-[#6980a2] h-auto font-principal font-bold flex md:justify-center flex-col items-center');
  body.innerHTML = `   <div class="font-principal bg-[#6980a2] w-full h-12 text-white flex justify-center items-center">
        <h1>nombre de la categoria</h1>
    </div>
<!-- para movil -->

<main class="md:hidden w-full snap-x snap-mandatory h-auto scrollbar overflow-x-scroll bg-gradient-to-t from-gray-300 to-gray-500">

    <ul id="container-ul" class="flex max-w-[300%] w-[300%] h-[26rem]">
           
        <li class="list-none w-full flex justify-center snap-center">
            <img id="img1" src="https://i.pinimg.com/564x/17/55/f6/1755f6bed8d7ae7c22c8e0b612a18281.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

        <li id="box" class="list-none w-full flex justify-center snap-center">
            <img id="img2" src="https://i.pinimg.com/564x/47/42/06/474206b70bbac7e19d2cba297fbefcb9.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

        <li class="list-none w-full flex justify-center snap-center">
            <img id="img3" src="https://i.pinimg.com/564x/76/0b/92/760b928dfe87e1c194b9da880a56824c.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>
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
            <input type="text" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="brand-movile" value="Nike">
        </div>
        
        <div class="flex flex-col">
            <span class="text-slate-600">Descripcion:</span>
            <textarea name="" class="outline-none" id="" rows="3" readonly>ddd</textarea>
            <!-- <input type="text" class="justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center" id="description-movile"> -->
        </div>

        <div class="w-full h-8">
            <span class="text-slate-600">Precio:</span>
            <input type="number" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="price-movile" value="5">
        </div>
    

        <div class="flex justify-between text-slate-600 md:hidden h-10 items-center gap-4">
            <p>Talla:</p>
           <button class="border w-16 rounded-md text-white bg-slate-500 p-4">S</button>
           <button class="border w-16 rounded-md text-white bg-slate-500 p-4">M</button>
           <button class="border w-16 rounded-md text-white bg-slate-500 p-4">L</button>
           <button class="border w-16 rounded-md text-white bg-slate-500 p-4">XL</button>
           <button class="border w-16 rounded-md text-white bg-slate-500 p-4">XXL</button>
        </div>
        
        <div class="w-full h-8">
            <span class="text-slate-600">Cantidad Talla:</span>
            <input type="number" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="amount-movile" value="5">
        </div>

        <div class="w-full h-8">
            <span class="text-slate-600">Cantidad Total:</span>
            <input type="number" class="justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8" readonly id="amount-t-movile" value="5">
        </div>
    
        <div class="w-full flex justify-center">
            <button class="bg-[#3483fa] mt-8 w-40 rounded-md h-10 hover:scale-110 duration-300 text-white font-principal md:hidden mb-4">Editar</button>

        </div>
        
      
    </div>
    
   
</div>


<!-- para tamaño de pc -->
<main class="hidden md:w-[90%] md:h-[28rem] border-[#b6b4b9] border bg-white md:rounded-md md:flex xl:w-[80rem]">
    
    <div class="border w-[15%] h-full rounded-l-md border-[#b6b4b9] border-t-0 border-l-0 border-b-0">
        
        <div class="h-1/3 w-full">
          <img src="" alt="img" id="img1-pc">
        </div>

        <div class="h-1/3 w-full">
         <img src="" alt="img" id="img2-pc">
        </div>

        <div class="h-1/3 w-full">
         <img src="" alt="img" id="img3-pc">
        </div>

    </div>

    <div class="border w-1/2 h-full flex justify-center border-t-0 border-l-0 border-b-0 border-[#b6b4b9]">
        <img id="imgt-pc" src="https://i.pinimg.com/736x/6e/4f/ad/6e4fade85181fdcd6305a4e738fe5612.jpg" alt="img" class="w-4/5 h-full">
    </div>
    <div class="border w-[35%] h-full rounded-r-md flex flex-col items-center">
        <!-- <p class="h-[14%] w-full flex justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0">Marca</p> -->
        <input type="text" class="h-[14%] w-full flex justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center" readonly value="Marca">
        
        <textarea name="" id="description-pc" class="h-[14%] outline-none break-words w-full border flex justify-center items-center pl-4 border-[#b6b4b9] border-l-0 border-r-0 border-b-0 pr-3" readonly>d</textarea>
     
        <div class="h-[14%] w-full flex items-center justify-center border border-[#b6b4b9] border-l-0 border-r-0">
            <span class="w-auto">Precio:</span>
            <input type="number" id=price-pc" readonly value="5" class="outline-none text-justify w-16 flex justify-center items-center">
        </div>

        <div class="h-[14%] border flex items-center w-full justify-center gap-4 border-[#b6b4b9] border-l-0 border-r-0 border-b-0">
            <p class="">Talla:</p>
            <button class="border w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">S</button>
            <button class="border w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">M</button>
            <button class="border w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">L</button>
            <button class="border w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">XL</button>
            <button class="border w-10 rounded-md text-white bg-slate-500  hover:scale-110 duration-300">XXL</button>
        </div>

        <div class="h-[14%] w-full flex items-center justify-center border border-[#b6b4b9] border-l-0 border-r-0">
            <span class="w-auto">Cantidad:</span>
            <input type="text" id="amount-pc" readonly value="5" class="outline-none text-justify w-16 flex justify-center items-center">
        </div>
       
      
        <div class="h-[14%] w-full flex items-center justify-center border border-[#b6b4b9] border-l-0 border-r-0">
            <span class="w-auto">Cantidad total:</span>
            <input type="text" id="amount-t-pc" readonly value="5" class="outline-none text-justify w-16 flex justify-center items-center">
        </div>
        
        <div class="flex items-center justify-center w-full h-[14%]">
            <button class="bg-[#3483fa] w-40 rounded-md h-10 hover:scale-110 duration-300 text-white font-principal">Editar</button>
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

  //funcionamiento de los botones e imagenes


};

//<p class="h-[14%] w-full flex justify-center items-center border border-[#b6b4b9] border-l-0 border-r-0">Cantidad total:</p>



const noScreen = () => {

  body.setAttribute('class', 'md:bg-[#6980a2] h-screen font-principal font-bold flex justify-center items-center');
  body.innerHTML = `<h1 class="text-red-600">Not Found 404</h1>
 `;
};