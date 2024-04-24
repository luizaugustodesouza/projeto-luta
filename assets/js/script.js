let char = new Mage('Teco');
let monster = new Sol();
let log = new Log(document.querySelector('.log'));

const stage = new Stage(
  char,
  monster,
  document.querySelector('#hero'),
  document.querySelector('#monster'),
  log
)
stage.start();

