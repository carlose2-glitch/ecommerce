const noRegistered = (data) => {
  const header = nav('no');
  const main = content(data);
  body.innerHTML = header + main;

  eventHamburguer();
  linksHamburguer();
  principal();
};
