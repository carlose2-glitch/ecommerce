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
    
     <div class="flex w-auto gap-4 border rounded-md border-slate-800">
     <input id="mm-38" type="number" title="Ancho entre visagra y visagra" placeholder="Ancho lente" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="mm-39" type="number" placeholder="Puente" title="Ancho del puente de la nariz" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="mm-40" type="number" placeholder="patillas" title="largo de las varillas" class="rounded-lg outline-none pl-4 pr-4 w-20">
      <input id="mm-38" type="number" placeholder="cantidad" title="Cantidad de la talla" class="rounded-lg outline-none pl-4 pr-4 w-24">
     
     </div>

     <div class="flex  w-auto gap-4 border rounded-md border-slate-800">
     <input id="mm-38" type="number" title="Ancho entre visagra y visagra" placeholder="Ancho lente" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="mm-39" type="number" title="Ancho del puente de la nariz" placeholder="Puente" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="mm-40" type="number" title="Largo de las varillas" placeholder="patillas" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="mm-38" type="number" title="Cantidad de la talla" placeholder="cantidad" class="rounded-lg outline-none pl-4 pr-4 w-24">
     
     </div>
     <div class="flex  w-auto gap-4 border rounded-md border-slate-800">
     <input id="mm-38" type="number" placeholder="Ancho lente" title="Ancho entre visagra y visagra" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="mm-39" type="number" placeholder="Puente" title="Ancho del puente de la nariz" class="rounded-lg outline-none pl-4 pr-4 w-20">
     <input id="mm-40" type="number" placeholder="patillas" title="Largo de las varillas" class="rounded-lg outline-none pl-4 pr-4 w-20">
      <input id="mm-38" type="number" placeholder="cantidad" title="Cantidad de la talla" class="rounded-lg outline-none pl-4 pr-4 w-24">
     
     </div>
     
     <input id="price" title="precio del producto" type="number" placeholder="precio" class="rounded-lg outline-none pl-4 pr-4 w-96">
     <input id="cantidadt" title="Cantidad total" type="number" placeholder="total" class="rounded-lg outline-none pl-4 pr-4 w-96">
      </div>
    
    
    </div>

  
     <button class="bg-slate-600 rounded-lg font-bold text-white h-8 hover:scale-110 duration-300 w-72" id="addProductbtn">Agregar</button>
   </form>
    </main>`;

};