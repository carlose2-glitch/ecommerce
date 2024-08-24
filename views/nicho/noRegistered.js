const no = async (v) => {

  const extractProduct = await extract();
  const imagesProducts = container(extractProduct);
  console.log(imagesProducts);
  body.innerHTML = nav(v);
  body.appendChild(imagesProducts);
  eventHamburguer();
  //selectCategory(); //extract.js
  linksHamburguer();
  principal();
  selectProduct();
};

const selectProduct = () => {

  const main = document.getElementById('main');

  main.addEventListener('click', e => {

    if(e.target.id !== '' && e.target.id !== 'main'){
      window.location.href = `/categories/${e.target.id}`;
    }
  });
};