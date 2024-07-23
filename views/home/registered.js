const registered = async (data) => {

  const one = await headerAndMain();
  const two = myProducts();
  const three = footer();

  body.innerHTML = one + two + three;
  eventHamburguer();
  slider();
};