const slider = () => {

  const next = document.getElementById('next');
  const previous = document.getElementById('previous');
  const containerPhotos = document.getElementById('container-photos');



  const containerClassImgs = [];
  //boton de siquiente
  next.addEventListener('click', e => {
    console.log('next');
    //guarda las clases de las imagenes
    for(let i = 0 ; i<5;i++){
      containerClass(i);
    }
    //modifica las posiciones de las imagenes
    for(let i = 0; i<5; i++){
      images(i, 'next');
    }
    //resetea el almacenador de imagenes
    for(let i = 0; i<5; i ++){
      containerClassImgs.pop();
    }
  });

  const containerClass= ( contador) => {
    containerClassImgs.push(containerPhotos.children[contador].attributes[2].nodeValue);
  };

  const images = (contador, funtion) => {

    if(funtion === 'next'){
      sortImgs(contador);
    }else{
      sortImgsSub(contador);
    }
  };

  const sortImgs = ( contador ) => {

    if(contador === 4){
      containerPhotos.children[0].setAttribute('class', containerClassImgs[contador]);
    }else{
      containerPhotos.children[contador + 1].setAttribute('class', containerClassImgs[contador]);
    }

  };

  previous.addEventListener('click', e => {
    console.log('previous');

    for(let i = 0; i < 5; i++){
      containerClass(i);
    }
    //console.log(containerClassImgs);

    for(let i = 0; i < 5; i++){
      images(i,  'previous');
    }
    for(let i = 0; i<5; i ++){
      containerClassImgs.pop();
    }
  });

  const sortImgsSub = (contador) => {

    if(contador === 0){
      containerPhotos.children[4].setAttribute('class', containerClassImgs[contador]);
    }else{
      containerPhotos.children[contador - 1].setAttribute('class', containerClassImgs[contador]);
    }
  };



  //slider mobile-----------------
  const containerPuntos = document.getElementById('container-puntos');
  const image1 = document.getElementById('shirts-mobile');
  const image2 = document.getElementById('caps-mobile');
  const image3 = document.getElementById('whatches-mobile');
  const image4 = document.getElementById('glasses-mobile');
  const image5 = document.getElementById('bracelets-mobile');
  //arreglo de las imagenes del slider version mobile
  const arrayMobile = [ image1.id, image2.id, image3.id, image4.id, image5.id];

  //evento que se encarga de escuchar a las imagenes
  const cargarImagen = (e, o) => {


    if(e[0].isIntersecting){

      for(let i = 0; i<5; i++){
        if(e[0].target.id === arrayMobile[i]){
          containerPuntos.children[i].removeAttribute('class');
          containerPuntos.children[i].setAttribute('class', 'w-4 h-4 bg-cyan-200 opacity-50 rounded-lg');
        }else{
          containerPuntos.children[i].removeAttribute('class');
          containerPuntos.children[i].setAttribute('class', 'w-4 h-4 bg-gray-200 opacity-50 rounded-lg');

        }
      }
    }

  };

  const observer = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
  });
  //observadores de cada imagen
  observer.observe(image1);
  observer.observe(image2);
  observer.observe(image3);
  observer.observe(image4);
  observer.observe(image5);


  const shirtsDesktop = document.getElementById('shirts');

  shirtsDesktop.addEventListener('click', e => {
    if(e.target.attributes.class.nodeValue.includes('w-80')){
      console.log('true');
      console.log(e.target.id);
      categories(e.target.id);
    }else{
      console.log('false');
    }
  });

  const capsDestop = document.getElementById('caps');

  capsDestop.addEventListener('click', e => {
    if(e.target.attributes.class.nodeValue.includes('w-80')){
      console.log('true');
      console.log(e.target.id);
      categories(e.target.id);
    }else{
      console.log('false');
    }
  });

  const watchesDestop = document.getElementById('watches');

  watchesDestop.addEventListener('click', e => {
    if(e.target.attributes.class.nodeValue.includes('w-80')){
      console.log('true');
      console.log(e.target.id);
      categories(e.target.id);
    }else{
      console.log('false');
    }
  });

  const glassesDestop = document.getElementById('glasses');

  glassesDestop.addEventListener('click', e => {
    if(e.target.attributes.class.nodeValue.includes('w-80')){
      console.log('true');
      console.log(e.target.id);
      categories(e.target.id);
    }else{
      console.log('false');
    }
  });

  const braceletsDesktop = document.getElementById('bracelets');

  braceletsDesktop.addEventListener('click', e => {
    if(e.target.attributes.class.nodeValue.includes('w-80')){
      console.log('true');
      console.log(e.target.id);
      categories(e.target.id);
    }else{
      console.log('false');
    }
  });

  const categories = async (category) => {

    try {

      await axios.post('/api/categories', { name:category });
      window.location.href = '../categories/categories.html';
    } catch (error) {

      console.log(error);

    }
  };

};
