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
     <input id="mm-38" type="number" placeholder="Cantidad S: 18cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="mm-39" type="number" placeholder="Cantidad M: 19cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="mm-40" type="number" placeholder="Cantidad L: 20cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="mm-41" type="number" placeholder="Cantidad xl: 21cm" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="price" type="number" placeholder="precio" class="rounded-lg outline-none pl-4 pr-4 w-80">
     <input id="cantidadt" type="number" placeholder="cantidad total" class="rounded-lg outline-none pl-4 pr-4 w-80">
      </div>
    
    
    </div>

  
     <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="addProductbtn">Agregar</button>
   </form>
    </main>`;


};