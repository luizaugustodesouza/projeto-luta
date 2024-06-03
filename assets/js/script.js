let charName = window.prompt('Olá herói, antes de embarcar na luta diga-nos seu nome');
let char = new Mage(charName);
let monster = new bigMonster();
let log = new Log(document.querySelector('.log'));

const stage = new Stage(
  char,
  monster,
  document.querySelector('#hero'),
  document.querySelector('#monster'),
  log
)
stage.start();

