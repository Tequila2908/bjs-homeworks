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

    function checkInputData (input) {

        let value;

        if (typeof(input) === 'number') {
            value = input;
            return value;
        
        } else  if (typeof (input) === 'string'){
            
            value  = parseInt(input);
        }
          if (typeof(value) === 'Number'&& ! isNaN(value)){
            return value;
          }    
         else {
          console.log(`Параметр ${input} содержит неправильное значение ${value}`);
        }
        
    }
    

    function getMonthsOfMorgage(date) {
      
      let date2 = new Date();

      let date1 = new Date(date);
      
      let year2 = date2.getFullYear();
      
      let year = date1.getFullYear();

      let months;

      months = (year - year2) * 12

      months += date1.getMonth() - date2.getMonth();

  
      return months;
    }


    let monthsToPay = getMonthsOfMorgage(date);
    

    let returnValue = checkInputData(amount) - checkInputData(contribution);

    let p = checkInputData(percent) / 1200;

    let c = Math.pow((1 + p), monthsToPay);

    let monthlyPayment = returnValue * (p + (p / (c - 1)));

    let totalAmount = returnValue + monthlyPayment * monthsToPay;

    return totalAmount;

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


    if (typeof(name)=== 'string' && name !== '') {
    greeting = `Привет, мир! Меня зовут ${name}`;
    
    } else {
    
        greeting = 'Привет, мир! Меня зовут Аноним';
    
    }
 
  return greeting;
}