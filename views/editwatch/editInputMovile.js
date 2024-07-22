const editInputsMovile = (e, d) => {

  const brandMovile = document.getElementById('brand-movile');
  const descriptionMovile = document.getElementById('description-movile');
  const priceMovile = document.getElementById('price-movile');
  const amountMovile = document.getElementById('amount-movile');
  const amountTmovile = document.getElementById('amount-t-movile');




  if(e.target.textContent === 'Editar'){

    brandMovile.removeAttribute('readonly');
    brandMovile.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8 bg-gray-200');

    descriptionMovile.removeAttribute('readonly');
    descriptionMovile.setAttribute('class', 'outline-none bg-gray-200');

    priceMovile.removeAttribute('readonly');
    priceMovile.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8 bg-gray-200');

    amountMovile.removeAttribute('readonly');
    amountMovile.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8 bg-gray-200');

    e.target.textContent = 'Guardar';

    amountMovile.addEventListener('input', e => {
      changeSize(e);
    });


  }else{

    evaluateInputs(brandMovile, descriptionMovile, priceMovile, amountMovile, e, amountTmovile, d);



  }

};



const evaluateInputs = async (brand, description, price, amount, e , t, d) => {


  if(brand.value.trim() !== '' && description.value.trim() !== '' && price.value.trim() !== '' && amount.value.trim() !== ''){
    brand.setAttribute('readonly', '');
    brand.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8');

    description.setAttribute('readonly', '');
    description.setAttribute('class', 'outline-none');

    price.setAttribute('readonly', '');
    price.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8');

    amount.setAttribute('readonly', '');
    amount.setAttribute('class', 'justify-center text-justify items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none h-8');

    await updateDB(brand.value, description.value, price.value, t.value, d);

    e.target.textContent = 'Editar';
  }
};

const updateDB = async (brand, description, price, t, d) => {

  const mm38 = document.getElementById('mm38-movile');
  const mm39 = document.getElementById('mm39-movile');
  const mm40 = document.getElementById('mm40-movile');
  const mm41 = document.getElementById('mm41-movile');

  console.log(t);

  const data = {
    id:d._id,
    brand: brand,
    description: description,
    price: price,
    t: t,
    mm38: mm38.parentElement.children[1].textContent,
    mm39: mm39.parentElement.children[1].textContent,
    mm40: mm40.parentElement.children[1].textContent,
    mm41: mm41.parentElement.children[1].textContent,
  };
  console.log(data);

  try {
    const res = await axios.post('/api/updateWatch', data);
    console.log(res);

  } catch (error) {
    console.log(error.message);
  }


};
  //guarda el valor del input para la que este subrayada con negro y guardar la cantidad total del producto
const changeSize = (e) => {


  const mm38 = document.getElementById('mm38-movile');
  const mm39 = document.getElementById('mm39-movile');
  const mm40 = document.getElementById('mm40-movile');
  const mm41 = document.getElementById('mm41-movile');

  const array = [mm38,mm39,mm40,mm41];

  const find = array.find(tag => tag.attributes[1].nodeValue.includes('black'));

  find.parentElement.children[1].textContent = e.target.value;

  const amountTmovile = document.getElementById('amount-t-movile');

  amountTmovile.value = Number(mm38.parentElement.children[1].textContent) + Number(mm39.parentElement.children[1].textContent) + Number(mm40.parentElement.children[1].textContent) + Number(mm41.parentElement.children[1].textContent);
};

