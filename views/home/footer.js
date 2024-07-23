const footer = () => {

  return `<div>
 ultimas compras
 </div>

 <footer class="flex flex-col pt-4 gap-4 items-center w-full">
    <h2 class="w-full text-center text-2xl">¡Únete a CARRASCO STORE!</h2>
    <p class="w-[90%] text-lg text-center text-slate-500">Suscribete para recibir ofertas exclusivas enviadas directamente a tu bandeja de entrada.</p>
    <form id="form-subs" class="flex flex-col items-center w-[100%] gap-4">
    <input type="email" placeholder="email" class="w-[80%] h-9 rounded md:w-60 px-3 mr-3">
    <button class="w-32 bg-gray-700 h-9 mb-8 text-slate-200 transition ease-out duration-300 hover:scale-105 rounded">Suscribete</button>
    </form>
</footer>`;
};