const registered = (data) => {
  const header = nav('si');
  const main = content(data);
  body.innerHTML = header;

  eventHamburguer();
  principal();
  closeSection();
};