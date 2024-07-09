//boton de editar y guardar
const editInputAndSave = async (tag, data) => {

  if(tag.textContent === 'Editar'){//editar el producto

    tag.parentElement.parentElement.children[0].removeAttribute('readonly');
    tag.parentElement.parentElement.children[0].setAttribute('class', 'bg-gray-200 h-[14%] w-full flex justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center');

    tag.parentElement.parentElement.children[1].removeAttribute('readonly');
    tag.parentElement.parentElement.children[1].setAttribute('class', 'bg-gray-200 h-[14%] outline-none break-words w-full border flex justify-center items-center pl-4 resize-none border-[#b6b4b9] border-l-0 border-r-0 border-b-0 pr-3');

    tag.parentElement.parentElement.children[2].children[1].removeAttribute('readonly');
    tag.parentElement.parentElement.children[2].children[1].setAttribute('class', 'bg-gray-200 outline-none text-justify w-16 flex justify-center items-center');

    tag.parentElement.parentElement.children[4].children[1].removeAttribute('readonly');
    tag.parentElement.parentElement.children[4].children[1].setAttribute('class', 'bg-gray-200 outline-none text-justify w-16 flex justify-center items-center');
    tag.textContent = 'Guardar';
    evaluateInputForm(tag, data);

  }else{//funcion para guardar el producto editado
    const r = await evaluateIfTrue(data);
    if(r){

      tag.parentElement.parentElement.children[0].setAttribute('readonly', '');
      tag.parentElement.parentElement.children[0].setAttribute('class', 'h-[14%] w-full flex justify-center items-center border-[#b6b4b9] border-l-0 border-r-0 border-b-0 outline-none text-center');

      tag.parentElement.parentElement.children[1].setAttribute('readonly', '');
      tag.parentElement.parentElement.children[1].setAttribute('class', 'h-[14%] outline-none break-words w-full border flex justify-center items-center pl-4 resize-none border-[#b6b4b9] border-l-0 border-r-0 border-b-0 pr-3');

      tag.parentElement.parentElement.children[2].children[1].setAttribute('readonly', '');
      tag.parentElement.parentElement.children[2].children[1].setAttribute('class', 'outline-none text-justify w-16 flex justify-center items-center');

      tag.parentElement.parentElement.children[4].children[1].setAttribute('readonly', '');
      tag.parentElement.parentElement.children[4].children[1].setAttribute('class', 'outline-none text-justify w-16 flex justify-center items-center');

      tag.textContent = 'Editar';

    }else{
      console.log('debe llenar los datos del formulario');
    }



  }

};


const evaluateInputForm = (tag, data) => {


  const brand = tag.parentElement.parentElement.children[0].value;
  const description = tag.parentElement.parentElement.children[1].value;
  const price = tag.parentElement.parentElement.children[2].children[1].value;

  const children = tag.parentElement.parentElement.children[3];

  //console.log(children.children[1].children[0].attributes[0].nodeValue);
  const array = [children.children[1], children.children[2], children.children[3], children.children[4]];

  const tallaSelect = document.getElementById('amount-pc');

  tallaSelect.addEventListener('input', e => {
    console.log(children.children[1].children[1].textContent);
    Number(children.children[1].textContent + children.children[2].textContent);
    for(let value of array){
      //console.log(value.attributes[1].nodeValue.includes('black'));
      if(value.attributes[1].nodeValue.includes('black')){

        //guardar los valores en su respectiva talla
        value.children[1].textContent = e.target.value;
        children.parentElement.children[5].children[1].value = Number(children.children[1].children[1].textContent) + Number( children.children[2].children[1].textContent) + Number(children.children[3].children[1].textContent) + Number(children.children[4].children[1].textContent) ;
        //evaluateText(value, e, data);

        //  value.textContent = e.target.value;

      }

    }
    //console.log(e.target.value);
  });

};

const evaluateIfTrue = async (d) => {

  const brand = document.getElementById('brand');
  const description = document.getElementById('description-pc');
  const price = document.getElementById('price-pc');
  const s = document.getElementById('s');
  const m = document.getElementById('m');
  const l = document.getElementById('l');
  const xl = document.getElementById('xl');
  const total = document.getElementById('amount-t-pc');

  const data = {
    id:d._id,
    description: description.value,
    brand: brand.value,
    price: price.value,
    s: s.children[1].textContent,
    m: m.children[1].textContent,
    l: l.children[1].textContent,
    xl: xl.children[1].textContent,
    t: total.value,
  };

  console.log(data);

  //si cumple todos los requisitos el formulario pasa por aca
  if(brand.value.trim() !== '' && description.value.trim() !== '' && price.value.trim() !== '' && s.children[1].textContent.trim() !== '' && m.children[1].textContent.trim() !== '' && l.children[1].textContent.trim() !== '' && xl.children[1].textContent.trim() !== ''){

    try {

      const res = await axios.post('/api/updateDb', data);
      console.log(res);
      return true;

    } catch (error) {
      console.log(error.message);
      return false;
    }


  }else{
    return false;
  }



};