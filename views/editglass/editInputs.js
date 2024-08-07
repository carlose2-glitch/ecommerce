const  editInputs = (button, data) => {
  const brand = document.getElementById('brand');
  const description = document.getElementById('description-pc');
  const price = document.getElementById('price-pc');
  const cantidad = document.getElementById('amount-pc');
  const select = document.getElementById('selectT');
  const totalquanty = document.getElementById('amount-t-pc');


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

      evaluateCantidad(select.value, e.target.value, totalquanty);


    });

  }else{

    verificationInputs(brand, description, price, cantidad, data, totalquanty);

    brand.setAttribute('readonly', '');
    brand.setAttribute('class', 'h-[14%] w-full flex justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center');

    description.setAttribute('readonly', '');
    description.setAttribute('class', 'h-[14%] outline-none break-words w-full border flex justify-center items-center pl-4 resize-none border-[#b6b4b9] border-l-0 border-r-0 border-b-0 pr-3');

    price.setAttribute('readonly', '');
    price.setAttribute('class', 'outline-none text-justify w-16 flex justify-center items-center');

    cantidad.setAttribute('readonly', '');
    cantidad.setAttribute('class', '[-webkit-appearance:none] outline-none text-center w-1/6 flex justify-center items-center');


    button.textContent = 'Editar';

  }
};

const evaluateCantidad = (select, value, tquanty) => {

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

  totalQuanty(t1, t2, t3, tquanty);

};

const totalQuanty = (t1, t2, t3, tq) => {

  tq.value = Number(t1.value) + Number(t2.value) + Number(t3.value);

};

const verificationInputs = async (brand, description, price, cantidad, data, tq) => {

  if(brand.value.trim() !== '' && description.value.trim() !== '' && price.value.trim() !== '' && cantidad.value.trim() !== ''){

    console.log('si');
    await updateDb(brand.value, description.value, price.value, cantidad.value, data, tq);
  }

};

const updateDb = async (brand, description, price, cantidad, d, tq) => {

  const t1 = document.getElementById('t1');
  const t2 = document.getElementById('t2');
  const t3 = document.getElementById('t3');


  const data = {
    id: d._id,
    brand: brand,
    description: description,
    price: price,
    total1: t1.value,
    total2: t2.value,
    total3: t3.value,
    totalq: tq.value


  };
  try {
    const r = await axios.post('/api/updateGlass', data);
    console.log(r);
  } catch (error) {
    console.log(error.message);

  }

};