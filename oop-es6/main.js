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
  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const bow = new Weapon('Лук', 10, 200, 3);
const arm = new Weapon('Рука', 1, Infinity, 1);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const ax = new Weapon('Секира', 27, 800, 1);
const stickOfStorm = new Weapon('Посох Бури', 10, 300, 3);
bow.takeDamage(5);
console.log(sword);
console.log(sword.isBroken());
bow.takeDamage(5);
console.log(bow.isBroken());

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
console.log(test25);
console.log(test25.getDamage());



class StudentLog {
  constructor (name) {
    this.name = name;
    this.obg = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade >= 1 && grade <= 5) {
      if (this.obg[subject] === undefined) {
        this.obg[subject] = [];
        this.obg[subject].push(grade);
        return this.obg[subject].length;
      } else {
          this.obg[subject].push(grade);
          return this.obg[subject].length;
      }
    } else {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      if (this.obg[subject] === undefined) {
        return 0;
      }
      return this.obg[subject].length;
    }
  }

  getAverageBySubject(subject) {
    if (this.obg[subject] === undefined || this.obg[subject].length === 0) {
      return 0;
    } 
    let sub = this.obg[subject];
    let sum = 0;
    for (let i = 0; i < sub.length; i++) {
      sum += sub[i];
    }
    return sum / sub.length;
  }
  getTotalAverage() {
    let average = 0;
    let allSum = 0;
    let key = 0;
    for (let subj in this.obg) {
      let value = this.obg[subj];
      let sum = 0;
      for (let i = 0; i < value.length; i++) {
        sum += value[i];
      }
      average += sum/value.length;
      key++; 
    }
    if (isNaN(average / key)) {
      return 0;
    } 
    return average / key;
  }
}

const test = new StudentLog('Test');

test.addGrade(2, 'algebra');
test.addGrade(25, 'algebra');
test.addGrade(5, 'test');
test.addGrade(4, 'geometry');
console.log(test.addGrade(25, 'test1')); 




















