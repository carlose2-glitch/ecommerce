const editInputsMovile = (e) => {

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

    evaluateInputs(brandMovile, descriptionMovile, priceMovile, amountMovile, amountTmovile);



  }

};



const evaluateInputs = (brand, description, price, amount, t) => {


  console.log('guardar');
};
//guarda el valor del input para la que este subrayada con negro y guardar la cantidad total del producto
const changeSize = (e) => {


  const s = document.getElementById('s-movile');
  const m = document.getElementById('m-movile');
  const l = document.getElementById('l-movile');
  const xl = document.getElementById('xl-movile');

  const array = [s,m,l,xl];

  const find = array.find(tag => tag.attributes[1].nodeValue.includes('black'));

  find.parentElement.children[1].textContent = e.target.value;

  const amountTmovile = document.getElementById('amount-t-movile');

  amountTmovile.value = Number(s.parentElement.children[1].textContent) + Number(m.parentElement.children[1].textContent) + Number(l.parentElement.children[1].textContent) + Number(xl.parentElement.children[1].textContent);
};