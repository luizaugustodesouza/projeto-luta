class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;
  constructor(name) {
    this.name = name;
  }
  get life() {
    return this._life.toFixed(1);
  }
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}
class Knigth extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.maxLife = this.life;
    this.attack = 10;
    this.defense = 8;
  }
}
class Mage extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.maxLife = this.life;
    this.attack = 15;
    this.defense = 3;
  }
}
class littleMonster extends Character {
  constructor() {
    super('littleMonster');
    this.life = 70;
    this.maxLife = this.life;
    this.attack = 7;
    this.defense = 4;
  }
}
class Sol extends Character {
  constructor() {
    super('Sol');
    this.life = 160;
    this.maxLife = this.life;
    this.attack = 18;
    this.defense = 7;
  }
}
class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObject;
  }
  start() {
    this.update()
    this.log.addMenssage('Começar !')
    this.log.addMenssage(`${this.fighter1.name} vs ${this.fighter2.name}`)
    this.fighter1El.querySelector('button').addEventListener('click', () => { this.doAttack(this.fighter1, this.fighter2) })
    this.fighter2El.querySelector('button').addEventListener('click', () => { this.doAttack(this.fighter2, this.fighter1) })
  }
  update() {
    this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} ${this.fighter1.life} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife).toFixed(2) * 100;
    this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

    this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} ${this.fighter2.life} HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife).toFixed(2) * 100;
    this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
  }
  doAttack(attacking, attacked) {
    if (attacked.life <= 0) {
      this.log.addMenssage('Você venceu')
      return
    }
    if (attacking.life <= 0) {
      this.log.addMenssage('Você perdeu')
      return
    }
    let attackFactor = (Math.random() * 2).toFixed(2);
    let actualAttack = (attacking.attack * attackFactor).toFixed(1);

    let defenseFactor = (Math.random() * 2).toFixed(2);
    let actualDefense = (attacked.defense * defenseFactor).toFixed(1);

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      this.log.addMenssage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name} `)
    }
    else {
      this.log.addMenssage(`${attacked.name} escapou do ataque de algum jeito... `)
    }

    this.update();
  }
}
class Log {
  list = [];
  constructor(listEl) {
    this.listEl = listEl
  }
  addMenssage(msg) {
    this.list.push(msg)
    this.render()
  }
  render() {
    this.listEl.innerHTML = ' ';
    for (let i in this.list) {
      this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
    }
  }
}