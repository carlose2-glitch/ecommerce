const nav = (d) => {


  if(d === 'si'){


    return `<nav class="bg-gray-300 w-full h-12 flex justify-center md:justify-between">
  
  
          <img alt="img" id="logo-principal" src="/img/carrasco-high-resolution-logo-black-transparent.svg" class="ps-2 md:ps-4 w-40 cursor-pointer">
  
          <div class="hidden md:flex ">
  
          <div id="user-pc" class="md:flex md:items-center md:justify-center">
                              <i class="fa-solid px-2 fa-user cursor-pointer text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></i>
                              <span id="span" class="h-3 w-3 cursor-pointer border-black border-2 mr-2 origin-center rotate-45 border-t-0 border-l-0"></span>
          </div>
  
          <div id="menu-hamburguer-user" class="w-44 ml-[-7.5rem] h-auto bg-white absolute mt-10 hidden flex-col items-center rounded-md border-2">
              <h2 class="py-2">Nombre</h2>
  
              <a id="my-shopping-pc" class="flex justify-center h-10 items-center border-0 border-b-2 border-t-2 cursor-pointer hover:bg-gray-400 w-full"><p>Mis Compras</p></a>
              <a id="close-section-pc" class="flex justify-center h-10 items-center cursor-pointer hover:bg-gray-400 rounded-b-md w-full"><p>Cerrar Sesion </p></a>
          </div>
          </div>
  
  
        </nav>
  
        <nav id="nav-hamburguer" class="bg-black w-screen h-20 flex sticky top-0 z-10 items-center justify-between px-2 md:px-4">
          
          <svg id="hamburguer" class="w-9 md:hidden cursor-pointer" viewBox="-2 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hamburger</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-212.000000, -888.000000)" fill="#ffffff"> <path d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z" id="hamburger" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
          <div>
  
              <input type="text" class="focus:outline-none focus:ring focus:border-blue-300 rounded h-9 w-44 align-top outline-none px-3 mr-3" placeholder="BUSCAR">
              <i class="fa-solid fa-magnifying-glass text-white text-4xl cursor-pointer hover:scale-125 transition delay-200"></i>
          </div>
            <div id="controllers-categories-pc" class="text-white hidden md:flex text-base gap-8">
              <a href="/nicho/relojes" class="cursor-pointer hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">RELOJES</a>
              <a href="/nicho/camisas" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">CAMISAS</a>
              <a href="/nicho/gorras" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">GORRAS</a>
              <a href="/nicho/lentes" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">LENTES</a>
              <a href="/nicho/pulseras" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">PULSERAS</a>
            </div>
  
          <div>
              <p class="absolute px-4 font-bold pb-0 cursor-pointer">0</p>
              <i class="fa-solid fa-cart-shopping text-white text-4xl cursor-pointer"></i>
          </div>
  
          <div id="items" class="hidden">
              <div id="box" class="w-4/5 h-auto bg-white flex flex-col text-center justify-center font-bold rounded-md shadow-2xl animate-bouncetwo">
              <div class="flex flex-col bg-gray-200 rounded-t-md">
                  <div class="flex flex-wrap">
                      <div class="flex pt-4">
                          <a id="user" class="flex items-center justify-center">
                              <i class="fa-solid px-2 fa-user cursor-pointer text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></i>
  
                          </a>
                          <div>
                              <p>Nombre</p>
  
                          </div>
                      </div>
                      <div class="flex justify-center gap-4 py-4 w-full">
                          <button id="my-shopping-movile" class="text-white bg-black w-28 h-8 rounded-md">Mis Compras</button>
                          <button id="close-section-movile" class="h-8 w-28 bg-gray-400 rounded-md">Cerrar sesion</button>
                      </div>
  
                  </div>
  
  
              </div>
              <a href="/nicho/relojes" class="border-2 border-r-0 border-l-0 cursor-pointer h-10 flex flex-col items-center justify-center">
              <p class="transition delay-150 hover:scale-125">RELOJES</p>
              </a>
              <a href="/nicho/camisas" class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
              <p class="transition delay-150 hover:scale-125">CAMISAS</p>
              </a>
              <a href="/nicho/gorras" class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
              <p class="transition delay-150 hover:scale-125">GORRAS</p>
              </a>
              <a href="/nicho/lentes" class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
              <p class="transition delay-150 hover:scale-125">LENTES</p>
              </a>
              <a href="/nicho/pulseras" class="cursor-pointer h-10 flex flex-col items-center justify-center">
              <p class="transition delay-150 hover:scale-125">PULSERAS</p>
              </a>
  
              </div>
  
          </div>
  
        </nav>`;

  }else{
    console.log('aqui');
    return `<nav class="bg-gray-300 w-full h-12 flex justify-center md:justify-between">
  
  
          <img alt="img" id="logo-principal" src="/img/carrasco-high-resolution-logo-black-transparent.svg" class="ps-2 md:ps-4 w-40 cursor-pointer">
  
          <div class="hidden md:flex ">
  
          <div id="user-pc" class="md:flex md:items-center md:justify-center">
                              <i class="fa-solid px-2 fa-user cursor-pointer text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></i>
                              <span id="span" class="h-3 w-3 cursor-pointer border-black border-2 mr-2 origin-center rotate-45 border-t-0 border-l-0"></span>
          </div>
  
          <div id="menu-hamburguer-user" class="w-44 ml-[-7.5rem] h-auto bg-white absolute mt-10 hidden flex-col items-center rounded-md border-2">
              <h2 class="py-2">Bienvenido</h2>
              <p class="text-sm text-center font-normal text-slate-400">Ingresa a tu cuenta para ver tus compras, favoritos, etc.</p>
              <a id="signup-pc" class="flex justify-center h-10 items-center border-0 border-b-2 border-t-2 cursor-pointer hover:bg-gray-400 w-full"><p>Ingresa</p></a>
              <a id="create_account-pc" class="flex justify-center h-10 items-center cursor-pointer hover:bg-gray-400 rounded-b-md w-full"><p>Crear cuenta</p></a>
          </div>
          </div>
  
  
        </nav>
  
        <nav id="nav-hamburguer" class="bg-black w-screen h-20 flex sticky top-0 z-10 items-center justify-between px-2 md:px-4">

          <svg id="hamburguer" class="w-9 md:hidden cursor-pointer" viewBox="-2 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hamburger</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-212.000000, -888.000000)" fill="#ffffff"> <path d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z" id="hamburger" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
          <div>
  
              <input type="text" class="focus:outline-none focus:ring focus:border-blue-300 rounded h-9 w-44 align-top outline-none px-3 mr-3" placeholder="BUSCAR">
              <i class="fa-solid fa-magnifying-glass text-white text-4xl cursor-pointer hover:scale-125 transition delay-200"></i>
          </div>
            <div id="controllers-categories-pc" class="text-white hidden md:flex text-base gap-8">
              <a href="/nicho/relojes" class="cursor-pointer hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">RELOJES</a>
              <a href="/nicho/camisas" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">CAMISAS</a>
              <a href="/nicho/gorras" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">GORRAS</a>
              <a href="/nicho/lentes" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">LENTES</a>
              <a href="/nicho/pulseras" class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">PULSERAS</a>
            </div>
  
          <div>
              <p class="absolute px-4 font-bold pb-0 cursor-pointer">0</p>
              <i class="fa-solid fa-cart-shopping text-white text-4xl cursor-pointer"></i>
          </div>
  
          <div id="items" class="hidden">
              <div id="box" class="w-4/5 h-auto bg-white flex flex-col text-center justify-center font-bold rounded-md shadow-2xl animate-bouncetwo">
              <div class="flex flex-col bg-gray-200 rounded-t-md">
                  <div class="flex flex-wrap">
                      <div class="flex pt-4">
                          <a id="user" class="flex items-center justify-center">
                              <i class="fa-solid px-2 fa-user cursor-pointer text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></i>
  
                          </a>
                          <div>
                              <p>Bienvenido</p>
                              <p class="text-sm font-light">Ingresa tu cuenta para ver tus compras favoritas.</p>
                          </div>
                      </div>
                      <div class="flex justify-center gap-4 py-4 w-full">
                          <button id="signup-movile" class="text-white bg-black w-28 h-8 rounded-md">Ingresa</button>
                          <button id="create-account-movile" class="h-8 w-28 bg-gray-400 rounded-md">Crear cuenta</button>
                      </div>
  
                  </div>
  
  
              </div>
              <a href="/nicho/relojes" class="border-2 border-r-0 border-l-0 cursor-pointer h-10 flex flex-col items-center justify-center">
              <p class="transition delay-150 hover:scale-125">RELOJES</p>
              </a>
              <a href="/nicho/camisas" class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
              <p class="transition delay-150 hover:scale-125">CAMISAS</p>
              </a>
              <a href="/nicho/gorras" class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
              <p class="transition delay-150 hover:scale-125">GORRAS</p>
              </a>
              <a href="/nicho/lentes" class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
              <p class="transition delay-150 hover:scale-125">LENTES</p>
              </a>
              <a href="/nicho/pulseras" class="cursor-pointer h-10 flex flex-col items-center justify-center">
              <p class="transition delay-150 hover:scale-125">PULSERAS</p>
              </a>
  
              </div>
  
          </div>
  
        </nav>`;
  }
};