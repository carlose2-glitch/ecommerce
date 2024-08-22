const yes = async (v) => {

  const extractProduct = await extract();
  const imagesProducts = container(extractProduct);
  body.innerHTML = nav(v);
  body.appendChild(imagesProducts);
  eventHamburguer();
  //selectCategory();
  closeSection();
  principal();
};