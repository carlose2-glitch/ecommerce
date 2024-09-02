const content = (data) => {
  console.log(data);
  return `<main class="justify-center flex flex-wrap w-full h-auto">
  
  <div class="w-[50rem] h-auto border flex flex-wrap border-blue-700">
    <div class="w-full">
    <img src="${data.url1}" class="w-full" alt="img">
    </div>

    <div class="w-1/3">
     <img src="${data.url1}" class="w-full" alt="img"></div>
    <div class="w-1/3 h-5">
     <img src="${data.url2}" class="w-full" alt="img">
    </div>
    <div class="w-1/3 h-5">
     <img src="${data.url3}" class="w-full" alt="img">
    </div>
   </div>
  
   <div class="w-96 h-auto border border-blue-700">
    
   <p>${data.brand}</p>
  <p>$${data.price}</p>
  <div>${data.description}</div>
  <div class="flex">
        <p>Tallas</p>
        <select name="" id="">
            <option value="" selected>38mm</option>
            <option value="">39mm</option>
            <option value="">40mm</option>
             <option value="">41mm</option>
        </select>
  </div>

  <div class="flex">
  <p>Cantidad</p>
  <input type="number" class="w-10">
  <p>( disponibles)</p>
  </div>

  <button class="p-4 bg-orange-400 rounded-md text-white">Añadir a la cesta</button>
   
  </div>

    
  </main>`;
};