

const url = document.URL;

const extract = async () => {

  let urlSearch = '';

  const category = url.split('/')[4];

  if(category === 'relojes'){
    urlSearch = '/api/getWatch';
  }

  if(category === 'camisas' || category === 'gorras' || category === 'pulseras'){
    urlSearch = '/api/extractShirts';
  }

  if(category === 'lentes'){
    urlSearch = '/api/extractGlass';
  }


  try {
    const r = await axios.post( urlSearch , { category });
    return r.data.get;
  } catch (error) {
    return error.message;
  }
};


const selectCategory = () => {

  const select = document.getElementById('controllers-categories-pc');

  select.addEventListener('click', e => {
    const category = e.target.textContent.toLowerCase();
    window.location = `/nicho/${category}`;


  });
};

const container = (obj) => {

  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.setAttribute('class', 'flex gap-4 justify-center items-center w-full flex-wrap mt-6');
  obj.forEach(element => {

    main.innerHTML += `
  
        <div class="flex flex-col gap-4 items-center w-[70%] md:w-80 pb-4 bg-slate-200 hover:scale-105 duration-300 mb-4 rounded-lg">
    <img id="${element._id}" src="${element.url1}" class="w-full md:h-80 h-60 rounded cursor-pointer" alt="img">
    <input type="text" class="bg-slate-200 text-center outline-none font-principal font-bold" value="${element.brand}" readonly>

    <input type="text" class="bg-slate-200 text-center outline-none font-principal font-bold" value="$${element.price}" readonly>
   
  
    </div>`;


  });
  return main;
};