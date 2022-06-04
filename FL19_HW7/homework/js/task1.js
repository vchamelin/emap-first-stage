'use strict'

const firstNumber = prompt('Your first number?', 'Number');
const secondNumber = prompt('Your second number?', 'Number');

function alertMessage (fNum, sNum) {
  if(!isNaN(fNum) && !isNaN(sNum) && fNum < sNum){
    return sayArrayNums(fNum, sNum);
  }
  return 'Invalid input data';
}

function sayArrayNums(fNum, sNum){
  let arrayNums = [];
  sNum--;
  do{
    fNum++;
    arrayNums.push(fNum);
  }
  while (fNum < sNum)
  return arrayNums;
}

alert(alertMessage(firstNumber, secondNumber));