const deleteProduct = (product) => {

  const id = product.parentElement.children[0].id;
  const category = product.parentElement.parentElement.parentElement.children[0].textContent.toLowerCase();

  body.innerHTML += ` <main class="fixed top-0 flex items-center justify-center flex-col w-full h-screen bg-slate-500/65 rounded-md gap-8">
  
   <div class="flex items-center justify-center flex-col w-96 h-40 animate-bouncetwo bg-slate-200 rounded-md gap-8">
      <h2 class="text-red-600 font-bold">¿Esta seguro que quiere borrar el producto?</h2>
      <div class="flex gap-8">
       <button id="delete-product" class="text-white bg-slate-500 hover:scale-125 transition duration-300 w-16 h-12 rounded-md font-bold">Si</button>
       <button id="no-delete" class="text-gray-700 bg-lime-400 w-16 h-12 hover:scale-125 transition duration-300 rounded-md font-bold">No</button>
      </div>
     
    </div>
     </main>`;

  const deleteProduct = document.getElementById('delete-product');
  console.log(category);

  deleteProduct.addEventListener('click', async e => {
    e.preventDefault();

    if(category === 'gorras' || category === 'pulseras' || category === 'camisas'){
      const urls = await removeProduct(id);
    }

    if(category === 'lentes'){
      await removeglass(id);
    }

    if(category === 'relojes'){
      await removeWatch(id);
    }
    // const removeUrl = await removeUrls(urls);
    //console.log(removeUrl);
    console.log(e.target.parentElement);
    e.target.parentElement.innerHTML = '<svg class="animate-spinn h-5 w-5 rounded-xl mx-2 border-2 border-indigo-700 border-r-white"></svg><p class="text-gray-700 font-bold mr-2"> Cargando...</p>';
    setTimeout(() => {
      showProducts(category);
    }, 3000);


  });



  const noDelete = document.getElementById('no-delete');
  noDelete.addEventListener('click', e => {
    e.preventDefault();
    showProducts(category);

  });

};

//borrar producto
const removeProduct = async (product) => {
  const data = {
    id:product
  };

  try {

    const response = await axios.post('/api/deleteProduct', data);

    return { url1:response.data.url1delete, url2: response.data.url2delete, url3:response.data.url3delete };
  } catch (error) {
    console.log(error.message);
  }
};

const removeglass = async (id) => {

  try {
    await axios.post('/api/deleteGlass', { id });
    console.log('borrado');
  } catch (error) {
    console.log('no se pudo');
  }

};

const removeWatch = async (id) => {

  try {
    await axios.post('/api/deleteWatch', { id });
    console.log('borrado');
  } catch (error) {

    console.log('no se pudo');
  }

};