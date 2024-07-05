
const body = document.getElementById('body');

(async () => {

  const getInformation = await axios.get('/api/personalitation');

  if(getInformation.data.data === 'yes'){
    //cuando el token no esta vencido
    getInformationn();//getInformation.js

  }else{
    //si el token esta vencido
    notFound();
  }
})();

const notFound = () => {
  console.log('token vencido');
  body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-screen gap-8');
  body.innerHTML = ' <h1 class="text-red-600 font-bold">ERROR 404 NOT FOUND</h1>';
};



const editProduct = async (product) => {
  // id del producto para buscar en la base de datos
  const idProduct = product.parentElement.children[0].id;
  window.location.href = `../editproduct/${idProduct}`;
  //const edit = await axios.get(`/api/edit/${idProduct}`);

};

const saveUrl = async (fileImg) => {
  let dataForm = new FormData();
  dataForm.append('image', fileImg);

  try {

    const res = await fetch('https://api.imgbb.com/1/upload?key=0b1a31cbfe85b3f042616c896bc626ee',{
      method: 'POST',
      body: dataForm
    });
    return res.json();
  } catch (error) {
    return error.message;
  }
};

// se encarga de darles los estilos nuevamente a las etiquetas apenas se escribe un input
body.addEventListener('input', e => {


  //const arrayInput = ['category-text', 'marca', 'descripcion', 'talla', 'precio', 'cantidad', 'input-file', 'input-file_front', 'input-file_personalitation'];
  //console.log(e.target.id);
  // const find = arrayInput.find(element => element === e.target.id);

  const image1 = body.children[1].children[0].children[0].children[0].children[0];
  const image2 = body.children[1].children[0].children[0].children[1].children[0];
  const image3 = body.children[1].children[0].children[0].children[2].children[0];

  const array = [image1, image2, image3];

  for (let value of array){
    value.setAttribute('class', 'w-[20rem] rounded-lg h-60');
  }

  const description = body.children[1].children[0].children[1].children[0];
  const brand = body.children[1].children[0].children[1].children[1].children[0];
  const amountS = body.children[1].children[0].children[1].children[1].children[1];
  const amountM = body.children[1].children[0].children[1].children[1].children[2];
  const amountL = body.children[1].children[0].children[1].children[1].children[3];
  const amountXL = body.children[1].children[0].children[1].children[1].children[4];
  const price = body.children[1].children[0].children[1].children[1].children[5];
  const amountT = body.children[1].children[0].children[1].children[1].children[6];

  amountT.value = Number(amountS.value) +  Number(amountM.value) + Number(amountL.value) + Number(amountXL.value);

  const arrayTexts = [ description, brand, amountS, amountM, amountL, amountXL, price, amountT];


  for(let value of arrayTexts){
    value.setAttribute('class', 'rounded-lg outline-none resize-none pl-4 pr-4 w-80');
  }

});

