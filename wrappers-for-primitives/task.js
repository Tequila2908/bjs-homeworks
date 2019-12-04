function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount;
    'use strict';
    if (isNaN(percent)) {
      return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
    } else if (isNaN(contribution)) {
      return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`
    } else if (isNaN(amount)) {
      return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`
    }  


  	let month = ((((new Date(date)).getFullYear()) -  (new Date).getFullYear()) * 12) + (((new Date(date)).getMonth()) - (new Date).getMonth())
  
 
    let p = percent / 100 / 12;
    let totalAmount = (amount - contribution) * (p + (p / ((Math.pow((1 + p), month)) - 1))) * month;
    return totalAmount.toFixed(2);
}



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;

    let greeting;

    if (name !== '') {
    	greeting = `Привет, мир! Меня зовут ${name}`;
    
    } else {
    
        greeting = 'Привет, мир! Меня зовут Аноним';
    }
 
  return greeting;
}