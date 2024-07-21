const editInputsMovile = (button, data) => {

  const brand = document.getElementById('brand-movile');
  const description = document.getElementById('description-movile');
  const price = document.getElementById('price-movile');
  const cantidad = document.getElementById('amount-movile');
  const select = document.getElementById('selectT-movile');
  const totalquanty = document.getElementById('amount-t-m');

  if(button.textContent === 'Editar'){
    brand.removeAttribute('readonly');
    brand.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8 bg-gray-200');

    description.removeAttribute('readonly');
    description.setAttribute('class', 'outline-none resize-none bg-gray-200');

    price.removeAttribute('readonly');
    price.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8 bg-gray-200');

    cantidad.removeAttribute('readonly');
    cantidad.setAttribute('class', '[-webkit-appearance:none] outline-none text-center w-1/6 flex justify-center items-center bg-gray-200');

    button.textContent = 'Guardar';

    cantidad.addEventListener('input', e => {

      evaluateCantidad(select.value, e.target.value, totalquanty);


    });

  }else{

    verificationInputs(brand, description, price, cantidad, data, totalquanty);

    brand.setAttribute('readonly', '');
    brand.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8');

    description.setAttribute('readonly', '');
    description.setAttribute('class', 'outline-none resize-none');

    price.setAttribute('readonly', '');
    price.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8');

    cantidad.setAttribute('readonly', '');
    cantidad.setAttribute('class', '[-webkit-appearance:none] outline-none text-center w-1/6 flex justify-center items-center');


    button.textContent = 'Editar';

  }

};