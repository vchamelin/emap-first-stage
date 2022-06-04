'use strict'

const firstNum = confirm('Do you want to play a game?');

whatWillDo(firstNum);

function whatWillDo(firstNum){
  if (!firstNum){
    alert('You did not become a billioner, but can');
  } else {
    let attempt = 2;
    playCasino(getRandomInt(), attempt)
  }
}

function whatWilsecondPlaylDo(secondNumber, score, step = 1){
  if(!secondNumber){
    alert(`Thank you for your participation. Your prize is: ${score}`);
    const firstNum = confirm('Do you want to play a game?');
    whatWillDo(firstNum);
  } else {
    let attempt = 2;
    playCasino(getRandomInt(step),attempt, step, score);
  }
}

function playCasino(randNum, attempt, step = 1, score = 0){
  const nowPrize = calcSrore(attempt, step);
  const firstDiapazon = 8;
  const addToDiapazon = 4;
  const userNumber = prompt(`
  Choose a roulette pocet number from 0 to ${firstDiapazon+(step*addToDiapazon - addToDiapazon )}
  Attempts left: ${attempt + 1}
  Total prize: ${score}
  Possible prize on currant attempt: ${nowPrize}`, '');

  if (userNumber === `${randNum}`){
    score += nowPrize;
    const secondNumber = confirm(`Congratulation, you won! Your prize is:${score}. Do you want to continue?`);
    whatWilsecondPlaylDo(secondNumber, score, step + 1);
  } else if(userNumber !== `${randNum}` && attempt > 0){
    playCasino(randNum, attempt - 1, step, score);
  } else if(attempt === 0){
    alert(`Thank you for participation. Your prize is: ${score}`);
    const firstNum = confirm('Do you want to play a game?');
    whatWillDo(firstNum);
  }
}

function calcSrore (attempt, step){
  let prize = 0;
  const firstAttem = 2;
  const secondAttem = 1;
  const lastAttem = 0;
  const maxPrize = 100;
  const midPrize = 50;
  const lowPrize = 25;
    if(attempt === firstAttem) {
      prize += step * maxPrize;
  }
    if(attempt === secondAttem) {
      prize += step * midPrize;
  }
    if(attempt === lastAttem) {
      prize += step * lowPrize;
  }
  return prize;
}

function getRandomInt(step = 1) {
  const firstDiapazon = 8;
  const addToDiapazon = 4;
  return Math.floor(Math.random() * (firstDiapazon + (step * addToDiapazon - addToDiapazon )));
}
