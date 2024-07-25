const myProducts = async () => {

  const extract = await extractCategories(1);


  return `<div class="w-full flex flex-col items-center gap-4 pt-8 bg-gray-200">
    <h2 class="text-4xl text-center">En honor a Venezuela</h2>
    <p class="w-[90%] md:w-[95%] text-lg text-slate-500 text-center">Nuestros productos te permiten llevar siempre un pedacito de nuestra Venezuela con diseños unicos de nuestro pais en donde quiera que estes.</p>
</div>

<div id="controllers-products" class="w-full flex justify-center gap-4 pt-4 flex-wrap">

    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 md:h-auto rounded border bg-gray-700 border-slate-400">
     <img id="${extract.shirtId}" src="${extract.shirtUrl}" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">${extract.shirtDescription}</p>
     <p class="text-white">$${extract.shirtPrice}</p>
    </div>

    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 rounded border bg-gray-700 border-slate-400">
     <img id="${extract.watchId}" src="${extract.watchUrl}" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">${extract.watchDescription}</p>
     <p class="text-white">$${extract.watchPrice}</p>
    </div>
    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 rounded border bg-gray-700 border-slate-400">
     <img id="${extract.braceletsId}" src="${extract.braceletsUrl}" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">${extract.braceletsDescription}</p>
     <p class="text-white">$${extract.braceletsPrice}</p>
    </div>
    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 rounded border bg-gray-700  border-slate-400">
     <img id="${extract.capId}" src="${extract.capUrl}" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">${extract.capDescription}</p>
     <p class="text-white">$${extract.capPrice}</p>
    </div>

 </div>`;
};


const product = () => {

  const controllers = document.getElementById('controllers-products');

  controllers.addEventListener('click', e => {
    console.log(e.target.id);
    categories(e.target.id);

  });

};