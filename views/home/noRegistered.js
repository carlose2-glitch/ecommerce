const noRegistered = async () => {


  const header = `<nav class="bg-gray-300 w-full h-12 flex justify-center md:justify-between">


        <img alt="img" src="../img/carrasco-high-resolution-logo-black-transparent.svg" class="ps-2 md:ps-4 w-40">

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
            <a class="border-2 border-r-0 border-l-0 cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center"><p>RELOJES</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center border-b-2"><p>CAMISAS</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center border-b-2"><p>GORRAS</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center border-b-2"><p>LENTES</p></a>
            <a class="cursor-pointer transition delay-150 hover:scale-125 h-10 flex flex-col items-center justify-center"><p>PULSERAS</p></a>

            </div>

        </div>

      </nav>`;
  const one = await main();

  body.innerHTML = header + one + `
 <div class="w-full flex flex-col items-center gap-4 pt-8 bg-gray-200">
    <h2 class="text-4xl text-center">En honor a Venezuela</h2>
    <p class="w-[90%] md:w-[95%] text-lg text-slate-500 text-center">Nuestros productos te permiten llevar siempre un pedacito de nuestra Venezuela con diseños unicos de nuestro pais en donde quiera que estes.</p>
</div>

<div class="w-full flex justify-center gap-4 pt-4 flex-wrap">

    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 md:h-auto rounded border bg-gray-700 border-slate-400">
     <img id="" src="https://i.pinimg.com/564x/fe/d4/cc/fed4ccaa51ab5bdc3a5de814ca65fef6.jpg" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">descripcion</p>
     <p class="text-white">$precio</p>
    </div>

    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 rounded border bg-gray-700 border-slate-400">
     <img id="" src="https://i.pinimg.com/564x/94/16/dd/9416dd064dee8ed700935cccfe8c3aff.jpg" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">descripcion</p>
     <p class="text-white">$precio</p>
    </div>
    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 rounded border bg-gray-700 border-slate-400">
     <img id="" src="https://i.pinimg.com/564x/65/e3/39/65e3399167c65d09e5ce87e96f0ec08f.jpg" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">descripcion</p>
     <p class="text-white">$precio</p>
    </div>
    <div class="flex cursor-pointer transition ease-in duration-300 hover:scale-105 flex-col items-center w-[40%] md:w-60 rounded border bg-gray-700  border-slate-400">
     <img id="" src="https://i.pinimg.com/564x/d7/a3/dd/d7a3ddd8c625595bad2fe0f90813640f.jpg" alt="product" class="w-full md:h-80 h-60 rounded">
     <p class="text-white">descripcion</p>
     <p class="text-white">$precio</p>
    </div>

 </div>

 <footer class="flex flex-col pt-4 gap-4 items-center w-full">
    <h2 class="w-full text-center text-2xl">¡Únete a CARRASCO STORE!</h2>
    <p class="w-[90%] text-lg text-center text-slate-500">Suscribete para recibir ofertas exclusivas enviadas directamente a tu bandeja de entrada.</p>
    <form id="form-subs" class="flex flex-col items-center w-[100%] gap-4">
    <input type="email" placeholder="email" class="w-[80%] h-9 rounded md:w-60 px-3 mr-3">
    <button class="w-32 bg-gray-700 h-9 mb-8 text-slate-200 transition ease-out duration-300 hover:scale-105 rounded">Suscribete</button>
    </form>
</footer>`;

  eventHamburguer();

  const signUpPc = document.getElementById('signup-pc');
  const signupMovile = document.getElementById('signup-movile');
  const createAccountPc = document.getElementById('create_account-pc');
  const createAccountMovile = document.getElementById('create-account-movile');

  //eveto de ingresar
  signUpPc.addEventListener('click', e => {

    window.location.href = '../signup/index.html';
  });
  signupMovile.addEventListener('click', e => {
    window.location.href = '../signup/index.html';
  });
  //evento de crear usuario
  createAccountPc.addEventListener('click', e => {
    window.location.href = '../createaccount/index.html';
  });
  createAccountMovile.addEventListener('click', e => {
    window.location.href = '../createaccount/index.html';
  });

  slider();
};