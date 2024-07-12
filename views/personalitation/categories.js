//categoria camisas

const shirtsorcaps = (cate) => {
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

    <div class="flex flex-col md:flex-row gap-4">
    <textarea name="description" class="w-80 resize-none outline-none pl-4 pr-4 rounded-lg h-40 md:h-auto" id="description" placeholder="descripcion" id="description"></textarea>

    <div class="flex flex-wrap flex-col justify-center gap-4">
     <input id="marca" type="text" placeholder="marca" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="tallas" type="number" placeholder="Cantidad Talla S" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="tallam" type="number" placeholder="Cantidad Talla M" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="tallal" type="number" placeholder="Cantidad Talla L" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="tallaxl" type="number" placeholder="Cantidad Talla XL" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="precio" type="number" placeholder="precio" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="cantidadt" type="number" placeholder="cantidad total" class="rounded-lg outline-none pl-4 pr-4 w-80"> </div>
    
    
    </div>

  
     <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="addProductbtn">Agregar</button>
   </form>
    </main>`;


  //<input id="category-text" type="text" placeholder="categoria" class="rounded-lg outline-none pl-4 w-80 pr-4"></input>
  //tag de las imagenes
  const imageUpload = document.getElementById('image-upload');
  const imageFront = document.getElementById('image-upload_front');
  const imageUploadPersonalitation = document.getElementById('image-upload_personatilation');
  //input de las imagenes
  const inputFile = document.getElementById('input-file');
  const inputFileFront = document.getElementById('input-file_front');
  const inputFilePersonalitation = document.getElementById('input-file_personalitation');


  //funciones para que usuario vea las imagenes en el programa
  inputFile.addEventListener('change', e => {

    //const reader = new FileReader();

    if(e.target.files[0]){

      reader.onload = function ( e ) {
        imageUpload.src = e.target.result;

      };
      //console.log(e.target.files[0]);
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
  //tags del formulario para extraer los valores
  const description = document.getElementById('description');
  const brand = document.getElementById('marca');
  const amountS = document.getElementById('tallas');
  const amountM = document.getElementById('tallam');
  const amountL = document.getElementById('tallal');
  const amountXL = document.getElementById('tallaxl');
  const price = document.getElementById('precio');
  const amountt = document.getElementById('cantidadt');
  const addProductBtn = document.getElementById('addProductbtn');


  const form = document.getElementById('form_data');


  form.addEventListener('submit', async e => {
    e.preventDefault();

    let booleanimages = false;
    let booleantexts = false;

    //evalua si las imagenes estan cargadas
    if(inputFile.files[0] && inputFileFront.files[0] && inputFilePersonalitation.files[0]){
      booleanimages = true;
    }else{
      booleanimages = false;
    }

    const arrayForm = [description.value, brand.value, amountS.value, amountM.value, amountL.value, amountXL.value, price.value, amountt.value];
    //evalua el input del formulario que no este vacio
    for(let value of arrayForm){
      if (value.trim()){
        booleantexts= true;
      }else{
        booleantexts = false;
        break;
      }
    }

    if(booleanimages && booleantexts){//si las imagenes y los textos son cargados de manera correcta pasa por aca
      // console.log('verdadero');
      //manipulacion de estilos del boton
      addProductBtn.setAttribute('disabled', '');
      addProductBtn.setAttribute('class', 'flex bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72 justify-center items-center');
      addProductBtn.innerHTML = '<svg class="animate-spinn h-5 w-5 rounded-xl mx-2 border-2 border-indigo-400 border-r-white"></svg><p class="text-white mr-2"> Cargando...</p>';
      //crear url de las imagenes
      const getUrlImages = await urlImages(inputFile.files[0], inputFileFront.files[0], inputFilePersonalitation.files[0]);
      console.log(getUrlImages);
      const data = {
        category: cate,
        description: description.value,
        brand: brand.value,
        s: amountS.value,
        m: amountM.value,
        l: amountL.value,
        xl: amountXL.value,
        url1: getUrlImages[0].url,
        url2: getUrlImages[1].url,
        url3: getUrlImages[2].url,
        price: price.value,
        cantidadT: amountt.value,

      };

      try {
        const saveDb = await axios.post('/api/saveDbShirtsCaps', data);
        //console.log(saveDb);

      } catch (error) {
        console.log(error.message);
      }

      body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-screen gap-8');
      body.innerHTML = `<h1 class="font-bold text-green-600 text-5xl" >Producto agregado con exito</h1>
        <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="returnProduct">Regresar</button>`;



      const returnProduct = document.getElementById('returnProduct');

      returnProduct.addEventListener('click', e => {
        e.preventDefault();
        location.reload();

      });


    }else{
      {
        //funcion que se encarga de subrayar los bordes de rojo en dado caso que haya algun formulario vacio
        evalueform(inputFile, inputFileFront, inputFilePersonalitation, brand, description, price, amountt, amountS, amountM, amountL, amountXL);
      }

    }
  });
};

//funcion que se encarga de subrayar los bordes de rojo en dado caso que haya algun formulario vacio
const evalueform = (images, imagesfront, imagepersonalitation, brand, description, price, cantidadt, s, m, l, xl)  => {

  imagesverification(images, imagesfront, imagepersonalitation);
  textverification( brand, description, price, cantidadt, s, m, l, xl);

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
const textverification = ( brand, description, price, cantidadt, s, m, l, xl) => {
  const array = [brand, description, price, cantidadt, s, m, l, xl];
  for(let value of array){
    if(!value.value.trim()){
      value.setAttribute('class', 'resize-none rounded-lg outline-none pl-4 pr-4 w-80 border-2 border-rose-500');
    }
  }

};