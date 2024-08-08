
const main = async () => {


  const extract = await extractCategories(0);
  console.log(extract);
  return `

 <main class="w-full md:h-[470px]">

    <div id="container-photos" class="hidden bg-gradient-to-t from-gray-300 to-gray-500 overflow-x-auto relative overflow-y-hidden justify-center items-center md:flex h-full w-full bg-gray-600 scrollbar">

         <img id="${extract.shirtId}" src="${extract.shirtUrl}" class="shadow-lg shadow-cyan-500/50 w-60 rounded-md h-60 absolute left-[15%] -translate-x-1/2 opacity-40 z-0 transition-all duration-700" alt="img0">

         <img id="${extract.capId}" src="${extract.capUrl}" class="shadow-lg shadow-cyan-500/50 w-72 rounded-md h-72 absolute left-[30%] -translate-x-1/2 opacity-80 z-[1] transition-all duration-700" alt="img1">

         <img id="${extract.watchId}" src="${extract.watchUrl}" class="shadow-lg shadow-cyan-500/50 w-80 rounded-md h-80 -translate-x-1/2 left-2/4 absolute z-[2] cursor-pointer transition-all duration-700" alt="img2">

         <img id="${extract.glassId}" src="${extract.glassUrl}" class="shadow-lg shadow-cyan-500/50 w-72 rounded-md h-72 opacity-80 absolute -translate-x-1/2 left-[70%] z-[1] transition-all duration-700" alt="img3">

         <img id="${extract.braceletsId}" src="${extract.braceletsUrl}" class="shadow-lg shadow-cyan-500/50 w-60 rounded-md h-60 absolute opacity-40 -translate-x-1/2 left-[85%] z-[0] transition-all duration-700" alt="img4">


        <div id="previous" class="absolute z-[2] left-[15%] -translate-x-1/2 rotate-180 w-14 h-14 border-2 rounded-lg transition ease-in-out hover:scale-125 border-white flex items-center cursor-pointer">
            <span class="w-8 caret-transparent h-8 border-4 rotate-[-45deg] border-t-0 border-l-0 border-white absolute"></span>
        </div>

        <div id="next" class="absolute z-[2] left-[85%] -translate-x-1/2 w-14 h-14 border-2 border-white rounded-lg transition ease-in-out hover:scale-125 flex items-center cursor-pointer">
             <span class="w-8 caret-transparent h-8 border-4 rotate-[-45deg] border-t-0 border-l-0 border-white absolute"></span>
        </div>
    </div>

     <div id="container-mobile" class="md:hidden w-full snap-x snap-mandatory h-auto scrollbar overflow-x-scroll bg-gradient-to-t from-gray-300 to-gray-500">
        <ul id="container-ul" class="flex max-w-[500%] w-[500%] h-[26rem]">

            <li class="list-none w-full flex justify-center snap-center">
                <img id="${extract.shirtId}" src="${extract.shirtUrl}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li id="box" class="list-none w-full flex justify-center snap-center">
                <img id="${extract.capId}" src="${extract.capUrl}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li class="list-none w-full flex justify-center snap-center">
                <img id="${extract.watchId}" src="${extract.watchUrl}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li class="list-none w-full flex justify-center snap-center">
                <img id="${extract.glassId}" src="${extract.glassUrl}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>

            <li class="list-none w-full flex justify-center snap-center">
                <img id="${extract.braceletsId}" src="${extract.braceletsUrl}" alt="img" class="w-[80%] rounded-md mt-4 h-96 shadow-lg shadow-cyan-500/50"></li>
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