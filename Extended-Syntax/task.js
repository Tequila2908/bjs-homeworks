'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    let d = b * b - 4 * a * c,
    square = Math.sqrt(d);
    if (d < 0) {
    	return [ null ];
    } else if (d == 0) {
    	return [ (-b / 2 * a) ];
    } else {
    	return [ ((-b + square) / 2 * a), ((-b - square) / 2 * a) ];
    }
}


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;
  let sum = 0;
  if (marks.length <= 5) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  } else if (marks.length > 5) {
      marks = marks.slice(0, 5);
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
      return sum / marks.length;
  }

}

getAverageMark(marks);

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь

  let year = (new Date).getFullYear();
  let age = year - dateOfBirthday.getFullYear();
  console.log(age);
  console.log(year);


  if (age < 18) {
    return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  }
  else { 
    return(`Не желаете ли олд-фэшн, ${name}?`);
  }
}



