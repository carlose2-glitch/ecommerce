const showBracelets = (c) => {

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
    <textarea name="description" class="w-80 resize-none outline-none pl-4 pr-4 rounded-lg h-40 md:h-auto" id="description" placeholder="descripcion" id="description"></textarea>

    <div class="flex flex-wrap flex-col justify-center gap-4">
     <input id="marca" type="text" placeholder="marca y modelo" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="s" type="number" placeholder="Cantidad S: 18cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="m" type="number" placeholder="Cantidad M: 19cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="l" type="number" placeholder="Cantidad L: 20cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="xl" type="number" placeholder="Cantidad xl: 21cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="price" type="number" placeholder="precio" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="cantidadt" type="number" placeholder="cantidad total" class="rounded-lg outline-none pl-4 pr-4 w-80">
      </div>
    
    
    </div>

  
     <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="addProductbtn">Agregar</button>
   </form>
    </main>`;

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
  const s = document.getElementById('s');
  const m = document.getElementById('m');
  const l = document.getElementById('l');
  const xl = document.getElementById('xl');
  const price = document.getElementById('price');
  const total = document.getElementById('cantidadt');
  const addProductBtn = document.getElementById('addProductbtn');


  const form = document.getElementById('form-data');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    let booleanimages = false;
    let booleantexts = false;

    if(inputFile.files[0] && inputFileFront.files[0] && inputFilePersonalitation.files[0]){
      booleanimages = true;
    }else{
      booleanimages = false;
    }


    const arrayForm = [description.value, brandAndModel.value, s.value, m.value, l.value, xl.value, price.value, total.value];


    for (let value of arrayForm){
      if(value.trim()){
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
        category: c,
        description: description.value,
        brand: brandAndModel.value,
        s: s.value,
        m: m.value,
        l: l.value,
        xl: xl.value,
        url1: getUrlImages[0].url,
        url2: getUrlImages[1].url,
        url3: getUrlImages[2].url,
        price: price.value,
        totalquanty: total.value,
      };

      try {
        const saveDb = await axios.post('/api/saveBracelets', data);
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
        location.reload();

      });


    }else{
      evalueform(inputFile, inputFileFront, inputFilePersonalitation, brandAndModel, description, price, total, s, m, l, xl);
    }

  });

};