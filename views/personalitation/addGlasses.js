const showGlasses = (category) => {

  body.innerHTML = `<h1 class='text-4xl font-bold pt-8'>Agregar producto</h1>
    <main class="pb-8 w-full flex justify-center items-center">
   <form action="" class="flex flex-col items-center gap-4 w-[90%]" id="form-data">
  
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
    <textarea name="description" class="w-96 resize-none outline-none pl-4 pr-4 rounded-lg h-40 md:h-auto" id="description" placeholder="descripcion" id="description"></textarea>

    <div class="flex flex-wrap flex-col justify-center gap-4">
     <input id="marca" type="text" placeholder="Marca y modelo" class="rounded-lg outline-none pl-4 pr-4 w-96">
    
     <div id="first" class="flex w-auto gap-4 border rounded-md border-slate-800">

     <input id="hingewidth-1" type="number" title="Ancho entre visagra y visagra" placeholder="Ancho" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="bridgesize-1" type="number" placeholder="Puente" title="Ancho del puente de la nariz" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="templelenght-1" type="number" placeholder="patillas" title="largo de las varillas" class="rounded-lg outline-none pl-4 pr-4 w-20">
      <input id="total-1" type="number" placeholder="cantidad" title="Cantidad de la talla" class="rounded-lg outline-none pl-4 pr-4 w-24">
     
     </div>

     <div id="second" class="flex w-auto gap-4 border rounded-md border-slate-800">

     <input id="hingewidth-2" type="number" title="Ancho entre visagra y visagra" placeholder="Ancho" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="bridgesize-2" type="number" title="Ancho del puente de la nariz" placeholder="Puente" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="templelenght-2" type="number" title="Largo de las varillas" placeholder="patillas" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="total-2" type="number" title="Cantidad de la talla" placeholder="cantidad" class="rounded-lg outline-none pl-4 pr-4 w-24">
     
     </div>

     <div id="third" class="flex  w-auto gap-4 border rounded-md border-slate-800">

     <input id="hingewidth-3" type="number" placeholder="Ancho" title="Ancho entre visagra y visagra" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="bridgesize-3" type="number" placeholder="Puente" title="Ancho del puente de la nariz" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="templelenght-3" type="number" placeholder="patillas" title="Largo de las varillas" class="rounded-lg outline-none pl-4 pr-4 w-20">
      <input id="total-3" type="number" placeholder="cantidad" title="Cantidad de la talla" class="rounded-lg outline-none pl-4 pr-4 w-24">
     
     </div>
     
     <input id="price" title="precio del producto" type="number" placeholder="precio" class="rounded-lg outline-none pl-4 pr-4 w-96">
     <input id="cantidadt" title="Cantidad total" type="number" placeholder="total" class="rounded-lg outline-none pl-4 pr-4 w-96">
      </div>
    
    
    </div>

  
     <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="addProductbtn">Agregar</button>
   </form>
    </main>`;


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

  const description = document.getElementById('description');
  const brandAndModel = document.getElementById('marca');
  const first = document.getElementById('first');
  const second = document.getElementById('second');
  const third = document.getElementById('third');
  const price = document.getElementById('price');
  const cantidadT = document.getElementById('cantidadt');
  const addProductBtn = document.getElementById('addProductbtn');


  const form = document.getElementById('form-data');


  form.addEventListener('submit', async e => {

    e.preventDefault();

    let booleanimages = false;
    let booleantexts = false;

    const width1 = first.children[0];
    const bridge1 = first.children[1];
    const sideburns1 = first.children[2];
    const total1 = first.children[3];

    const width2 = second.children[0];
    const bridge2 = second.children[1];
    const sideburns2 = second.children[2];
    const total2 = second.children[3];

    const width3 = third.children[0];
    const bridge3 = third.children[1];
    const sideburns3 = third.children[2];
    const total3 = third.children[3];


    if(inputFile.files[0] && inputFileFront.files[0] && inputFilePersonalitation.files[0]){
      booleanimages = true;
    }else{
      booleanimages = false;
    }

    const arrayForm = [description.value, brandAndModel.value, width1.value, bridge1.value, sideburns1.value, total1.value, width2.value, bridge2.value, sideburns2.value, total2.value, width3.value, bridge3.value, sideburns3.value, total3.value, price.value, cantidadT.value];

    for (let value of arrayForm){
      if(value.trim()){
        console.log(value);
        booleantexts = true;
      }else{
        booleantexts = false;
        break;
      }
    }

    if(booleanimages && booleantexts){

      const getUrlImages = await urlImages(inputFile.files[0], inputFileFront.files[0], inputFilePersonalitation.files[0]);
      addProductBtn.setAttribute('disabled', '');
      addProductBtn.setAttribute('class', 'flex bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72 justify-center items-center');
      addProductBtn.innerHTML = '<svg class="animate-spinn h-5 w-5 rounded-xl mx-2 border-2 border-indigo-400 border-r-white"></svg><p class="text-white mr-2"> Cargando...</p>';

      const data = {
        category: category,
        description: description.value,
        brandandmodel:brandAndModel.value,
        width1: width1.value,
        bridge1: bridge1.value,
        sideburns1: sideburns1.value,
        total1: total1.value,
        width2: width2.value,
        bridge2: bridge2.value,
        sideburns2: sideburns2.value,
        total2: total2.value,
        width3: width3.value,
        bridge3: bridge3.value,
        sideburns3: sideburns3.value,
        total3: total3.value,
        price: price.value,
        amountt: cantidadT.value,
        url1: getUrlImages[0].url,
        url2: getUrlImages[1].url,
        url3: getUrlImages[2].url,

      };

      try {

        const savedDb = await axios.post('/api/saveGlasses', data);
        console.log(savedDb);

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
      console.log('no che puede');
      evalueformGlasses(inputFile, inputFileFront, inputFilePersonalitation, brandAndModel, description, price, cantidadT, width1, bridge1, sideburns1, total1, width2, bridge2, sideburns2, total2, width3, bridge3, sideburns3, total3);
    }

  });

};


const evalueformGlasses = (images, imagesfront, imagepersonalitation, brandAndModel, description, price, cantidadT, width1, bridge1, sideburns1, total1, width2, bridge2, sideburns2, total2, width3, bridge3, sideburns3, total3) => {

  imagesverification(images, imagesfront, imagepersonalitation);
  descriptionShow(description);
  textverification2(brandAndModel, price, cantidadT);
  textVerificationGlasses(width1, bridge1, sideburns1, total1, width2, bridge2, sideburns2, total2, width3, bridge3, sideburns3, total3);

};

const descriptionShow = (d) => {

  if(!d.value.trim()){

    d.setAttribute('class', 'w-96 resize-none outline-none pl-4 pr-4 rounded-lg h-40 md:h-auto border-2 border-rose-500');
  }

};

const textverification2 = (brandAndModel, price, cantidadT) => {

  const array = [brandAndModel, price, cantidadT];

  for(let value of array){
    if(!value.value.trim()){
      value.setAttribute('class', 'resize-none rounded-lg outline-none pl-4 pr-4 w-96 border-2 border-rose-500');
    }
  }

};
//subraya de rose los bordes equivocados de los inputs de las caracteristicas de los lentes
const textVerificationGlasses = (width1, bridge1, sideburns1, total1, width2, bridge2, sideburns2, total2, width3, bridge3, sideburns3, total3) => {

  const array = [width1, bridge1, sideburns1, total1, width2, bridge2, sideburns2, total2, width3, bridge3, sideburns3, total3];

  for(let value of array){
    if(!value.value.trim()){

      if (value.placeholder === 'cantidad'){
        value.setAttribute('class', 'rounded-lg outline-none pl-4 pr-4 w-24 border-2 border-rose-500');
      }else{
        value.setAttribute('class', 'rounded-lg outline-none pl-4 pr-4 w-20 border-2 border-rose-500');
      }

    }
  }


};