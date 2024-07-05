const imageDefect = 'https://i.pinimg.com/564x/52/a0/05/52a00533460fc8b74576209dd3d2c8de.jpg';
const reader = new FileReader();
//screen del formulario para agregar productos en la tienda

const addProduct = (category) => {

  body.setAttribute('class', 'bg-slate-300 w-full flex flex-col items-center justify-center h-auto gap-8');
  const categories = category.toLowerCase();

  if(categories === 'camisas'){
    //funcion para agregar una camisa o gorra
    shirtsorcaps(categories);
  }

  //evento click o enter del formulario una vez que todo los requerimientos esten llenos pasa por aqui

};

//funcion para extraer la url de cada imagen
const urlImages = async (img1, img2, img3) => {

  const array = [img1, img2, img3];
  const arrayUrls = [
    {
      url:'',

    },
    {
      url:'',

    },
    {
      url:'',

    }

  ];

  for(let value in array){
    const urlAndDelete = await saveUrl(array[value]);
    console.log(urlAndDelete);
    arrayUrls[value].url = urlAndDelete.data.url;

  }
  return arrayUrls;

};




