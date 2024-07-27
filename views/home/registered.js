const registered = async (data) => {


  const header = `<nav class="bg-gray-300 w-full h-12 flex justify-center md:justify-between">


        <img alt="img" src="../img/carrasco-high-resolution-logo-black-transparent.svg" class="ps-2 md:ps-4 w-40">

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
        <i id="hamburguer" class="fa-solid fa-bars md:hidden text-white text-4xl cursor-pointer"></i>
        <div>

            <input type="text" class="focus:outline-none focus:ring focus:border-blue-300 rounded h-9 w-44 align-top outline-none px-3 mr-3" placeholder="BUSCAR">
            <i class="fa-solid fa-magnifying-glass text-white text-4xl cursor-pointer hover:scale-125 transition delay-200"></i>
        </div>
          <div class="text-white hidden md:flex text-base gap-8">
            <p class="cursor-pointer hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">RELOJES</p>
            <p class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">CAMISAS</p>
            <p class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">GORRAS</p>
            <P class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">LENTES</P>
            <P class="cursor-pointer  hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">PULSERAS</P>
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
            <a class="border-2 border-r-0 border-l-0 cursor-pointer h-10 flex flex-col items-center justify-center">
            <p class="transition delay-150 hover:scale-125">RELOJES</p>
            </a>
            <a class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
            <p class="transition delay-150 hover:scale-125">CAMISAS</p>
            </a>
            <a class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
            <p class="transition delay-150 hover:scale-125">GORRAS</p>
            </a>
            <a class="cursor-pointer h-10 flex flex-col items-center justify-center border-b-2">
            <p class="transition delay-150 hover:scale-125">LENTES</p>
            </a>
            <a class="cursor-pointer h-10 flex flex-col items-center justify-center">
            <p class="transition delay-150 hover:scale-125">PULSERAS</p>
            </a>

            </div>

        </div>

      </nav>`;

  const one = await main();
  const two = await myProducts();

  const three = footer();

  body.innerHTML = header + one + two + three;
  eventHamburguer();
  slider();
  product();
  closeSection();
};