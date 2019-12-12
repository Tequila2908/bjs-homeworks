class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initialDurability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }
  getDamage() {
    if (this.durability === 0) {
      this.attack = 0;
      return this.attack;
    } else if (this.durability < (this.initialDurability / 100 * 30)) {
      this.attack = this.attack / 2;
      return this.attack;
    } else {
      return this.attack;
    }
  
  }
}

class Bow extends Weapon {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.initialDurability = this.durability;
    this.range = 3;
  }
}

class LongBow extends Bow {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Sword extends Weapon {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.initialDurability = this.durability;
    this.range = 1;
  }
}

class Ax extends Sword {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.initialDurability = this.durability;
  }
}


class Stick extends Weapon {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.initialDurability = this.durability;
    this.range = 2;
  }
}

class StickOfStorm extends Stick {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

const test25 = new StickOfStorm();
console.log(test25);
test25.takeDamage(310);
console.log(test25)
console.log(test25.getDamage())