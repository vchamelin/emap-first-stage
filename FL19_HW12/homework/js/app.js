import { dictionary } from './dictionary.js';

let col = 0;
let row = 0;
let gameOver = false;

let word = dictionary[getRandomInt()].toUpperCase();

const heightCow = 6;
const width = word.length;

// Word
function getRandomInt(max = dictionary.length) {
  return Math.floor(Math.random() * max);
}

//Board
window.onload = function(){
  initBoard();
}

function initBoard(){
  for (let r = 0; r < heightCow; r++) {
    for (let c = 0; c < width; c++) {
      let tile = document.createElement('span');
      tile.id = r.toString() + '-' + c.toString();
      tile.classList.add('tile');
      tile.classList.add('noActive');
      tile.innerText = '';
      document.getElementById('board').appendChild(tile);
    }
  }
  delClassNoActive('0');
  addClassActive('0-0');
}

//Key
document.addEventListener('keyup', (e) => {
  if(gameOver) {
    return
  }

  if(/^[А-Яа-яёЁЇїІіЄєҐґ]/.test(e.key)){
    if(col < width){
      let currTile = document.getElementById(`${row}-${col}`);
      if(currTile.innerText === ''){
        currTile.innerText = e.key.toLocaleUpperCase();
        currTile.classList.remove('active');
        col += 1;
        col < width ? addClassActive(`${row}-${col}`) : '';
      }
    }
  } else if (e.code === 'Backspace'){
    if(col > 0 && col <= width){
      col < width ? delClassActive(`${row}-${col}`) : '';
      col -= 1;
      addClassActive(`${row}-${col}`);
    }
    let currTile = document.getElementById(`${row}-${col}`);
    currTile.innerText = '';
  } else if(e.code === 'Enter'){
    incRow();
  }
  if(!gameOver && row === heightCow){
    gameOver = true;
    alert('Game оver.')
  }
})

document.getElementById('btn-check').addEventListener('click', () => {
  if(!gameOver) {
    incRow();
  }
})

//word is dictionary
function incRow() {
  if(document.getElementById(`${row}-${width-1}`).innerText !== ''){
    if(isWordReal(row)){
      update();
      row += 1;
      col = 0;
      if(row < heightCow && !gameOver){
        delClassNoActive(row);
        addClassActive(`${row}-${col}`);
      }
    } else {
      alert('Not in word list');
      delRowText(row);
      col = 0;
      addClassActive(`${row}-${col}`);
    }
  } else {
    alert('Enter the full word!')
  }
}

function isWordReal(row){
  let arrWordUser = [];
  for(let c = 0; c < width; c++){
    arrWordUser.push(document.getElementById(`${row}-${c}`).innerText);
  }
  let wordUser = arrWordUser.join('');
  return dictionary.includes(wordUser.toLocaleLowerCase());
}

function delRowText(row){
  for (let c = 0; c < width; c++) {
    document.getElementById(`${row}-${c}`).innerText = '';
  }
}

//dictionary class word
function update() {
  let correct = 0;
  for(let c = 0; c < width; c++){
    let currTile = document.getElementById(row.toString() + '-' + c.toString());
    let letter = currTile.innerText;

    if(word[c] === letter){
      currTile.classList.add('correct');
      correct += 1;
    } else if (word.includes(letter)){
      currTile.classList.add('present');
    } else {
      currTile.classList.add('absent');
    }

    if(correct === width - 1){
      gameOver = true;
      alert('Congratulation! You won.');
    }
  }
}

//delete class noActive
function delClassNoActive(rowNum){
  for (let c = 0; c < width; c++) {
    let currTileActive = document.getElementById(`${rowNum}-${c}`);
    currTileActive.classList.remove('noActive');
  }
}

//add class noActive
function addClassActive(id){
  let elem = document.getElementById(id);
  elem.classList.add('active');
}

//delete class active
function delClassActive(id){
  let currTileActive = document.getElementById(id);
  currTileActive.classList.remove('active');
}

//reload page
document.getElementById('btn-reset').addEventListener('click', () => {
  document.getElementById('board').innerHTML = '';
  initBoard();
  col = 0;
  row = 0;
  gameOver = false;
  word = dictionary[getRandomInt()].toUpperCase();
})
