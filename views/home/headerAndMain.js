

const headerAndMain = async () => {


  //const images = await searchImage();
  // console.log(images);

  return `<nav class="bg-gray-300 w-full h-12 flex justify-center md:justify-between">


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
            <a class="border-2 border-r-0 border-l-0 cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center"><p>RELOJES</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center border-b-2"><p>CAMISAS</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center border-b-2"><p>GORRAS</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center border-b-2"><p>LENTES</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center"><p>PULSERAS</p></a>

            </div>

        </div>

      </nav>

 <main class="w-full md:h-[470px]">

    <div id="container-photos" class="hidden bg-gradient-to-t from-gray-300 to-gray-500 overflow-x-auto relative overflow-y-hidden justify-center items-center md:flex h-full w-full bg-gray-600 scrollbar">

         <img id="shirts" src="https://i.pinimg.com/564x/17/55/f6/1755f6bed8d7ae7c22c8e0b612a18281.jpg" class="shadow-lg shadow-cyan-500/50 w-60 rounded-md h-60 absolute left-[15%] -translate-x-1/2 opacity-40 z-0 transition-all duration-700" alt="img0">

         <img id="caps" src="https://i.pinimg.com/564x/47/42/06/474206b70bbac7e19d2cba297fbefcb9.jpg" class="shadow-lg shadow-cyan-500/50 w-72 rounded-md h-72 absolute left-[30%] -translate-x-1/2 opacity-80 z-[1] transition-all duration-700" alt="img1">

         <img id="watches" src="https://i.pinimg.com/564x/76/0b/92/760b928dfe87e1c194b9da880a56824c.jpg" class="shadow-lg shadow-cyan-500/50 w-80 rounded-md h-80 -translate-x-1/2 left-2/4 absolute z-[2] cursor-pointer transition-all duration-700" alt="img2">

         <img id="glasses" src="https://i.pinimg.com/236x/a4/fe/a3/a4fea3dee368cd9a612b0efdbd73f840.jpg" class="shadow-lg shadow-cyan-500/50 w-72 rounded-md h-72 opacity-80 absolute -translate-x-1/2 left-[70%] z-[1] transition-all duration-700" alt="img3">

         <img id="bracelets" src="https://i.pinimg.com/564x/5b/5c/da/5b5cdaa297d8a6f6fcc4f877536624b9.jpg" class="shadow-lg shadow-cyan-500/50 w-60 rounded-md h-60 absolute opacity-40 -translate-x-1/2 left-[85%] z-[0] transition-all duration-700" alt="img4">


        <div id="previous" class="absolute z-[2] left-[15%] -translate-x-1/2 rotate-180 w-14 h-14 border-2 rounded-lg transition ease-in-out hover:scale-125 border-white flex items-center cursor-pointer">
            <span class="w-8 h-8 border-4 rotate-[-45deg] border-t-0 border-l-0 border-white absolute"></span>
        </div>

        <div id="next" class="absolute z-[2] left-[85%] -translate-x-1/2 w-14 h-14 border-2 border-white rounded-lg transition ease-in-out hover:scale-125 flex items-center cursor-pointer">
             <span class="w-8 h-8 border-4 rotate-[-45deg] border-t-0 border-l-0 border-white absolute"></span>
        </div>
    </div>

     <div id="container-mobile" class="md:hidden w-full snap-x snap-mandatory h-auto scrollbar overflow-x-scroll bg-gradient-to-t from-gray-300 to-gray-500">
        <ul id="container-ul" class="flex max-w-[500%] w-[500%] h-[26rem]">

            <li class="list-none w-full flex justify-center snap-center">
                <img id="shirts-mobile" src="https://i.pinimg.com/564x/17/55/f6/1755f6bed8d7ae7c22c8e0b612a18281.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li id="box" class="list-none w-full flex justify-center snap-center">
                <img id="caps-mobile" src="https://i.pinimg.com/564x/47/42/06/474206b70bbac7e19d2cba297fbefcb9.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li class="list-none w-full flex justify-center snap-center">
                <img id="whatches-mobile" src="https://i.pinimg.com/564x/76/0b/92/760b928dfe87e1c194b9da880a56824c.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li class="list-none w-full flex justify-center snap-center">
                <img id="glasses-mobile" src="https://i.pinimg.com/236x/a4/fe/a3/a4fea3dee368cd9a612b0efdbd73f840.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li class="list-none w-full flex justify-center snap-center">
                <img id="bracelets-mobile" src="https://i.pinimg.com/564x/5b/5c/da/5b5cdaa297d8a6f6fcc4f877536624b9.jpg" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>
        </ul>

    </div>
    <div id="container-puntos" class="md:hidden flex justify-center gap-1 p-2">
        <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
        <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
        <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
        <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
        <div class="w-4 h-4 bg-gray-200 rounded-lg"></div>
    </div>

</main>`;
};