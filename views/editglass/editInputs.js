const  editInputs = (button) => {
  const brand = document.getElementById('brand');
  const description = document.getElementById('description-pc');
  const price = document.getElementById('price-pc');
  const cantidad = document.getElementById('amount-pc');
  const select = document.getElementById('selectT');


  if(button.textContent === 'Editar'){
    brand.removeAttribute('readonly');
    brand.setAttribute('class', 'h-[14%] w-full flex justify-center bg-gray-200 items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center');

    description.removeAttribute('readonly');
    description.setAttribute('class', 'h-[14%] outline-none break-words w-full border flex justify-center items-center pl-4 resize-none border-[#b6b4b9] border-l-0 border-r-0 border-b-0 pr-3 bg-gray-200');

    price.removeAttribute('readonly');
    price.setAttribute('class', 'outline-none text-justify w-16 flex justify-center items-center bg-gray-200');

    cantidad.removeAttribute('readonly');
    cantidad.setAttribute('class', '[-webkit-appearance:none] outline-none text-center w-1/6 flex justify-center items-center bg-gray-200');

    button.textContent = 'Guardar';

    cantidad.addEventListener('input', e => {

      evaluateCantidad(select.value, e.target.value);


    });

  }else{



  }
};

const evaluateCantidad = (select, value) => {

  const t1 = document.getElementById('t1');
  const t2 = document.getElementById('t2');
  const t3 = document.getElementById('t3');

  if(select === 'width1'){
    t1.value = value;

  }

  if(select === 'width2'){
    t2.value = value;

  }

  if(select === 'width3'){

    t3.value = value;

  }

  totalQuanty(t1, t2, t3);

};

const totalQuanty = (t1, t2, t3) => {

  const quantyTotal = document.getElementById('amount-t-pc');

  quantyTotal.value = Number(t1.value) + Number(t2.value) + Number(t3.value);

};