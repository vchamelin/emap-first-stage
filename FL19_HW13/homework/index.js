document.addEventListener('DOMContentLoaded', () => {
  initBoard();
  let move = 0;
  document.getElementsByClassName('container')[0].addEventListener('click', (e) => {
    startGame(e, move);
    move += 1;
  });

  const avatarIcon = document.getElementsByClassName('icons')[0];
  let avatr;
  avatarIcon.addEventListener('dragstart', (e) => {
    avatr = e.target;
  })

  document.querySelectorAll('.avatar-container').forEach(container => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      if(!container.hasChildNodes()) {
        container.appendChild(avatr);
      }
    })
  });

  document.getElementById('reset').addEventListener('click', () => {
    move = resetGame(move);
    num = -1;
  })

  let num = -1;

  document.addEventListener('keydown', (e) => {
    const tiles = document.getElementsByClassName('tile');

    if (e.code === 'ArrowRight' ){
      num >= 8 ? num = 0 : num += 1;
      tiles[num].classList.add('active');
      num-1 < 0 ? tiles[8].classList.remove('active') : tiles[num - 1].classList.remove('active');
    } else if (e.code === 'ArrowLeft'){
      num <= 0 ? num = 8 : num -= 1;
      tiles[num].classList.add('active');
      num+1 > 8 ? tiles[0].classList.remove('active') : tiles[num + 1].classList.remove('active');
    } else if(e.code === 'Enter'){
      startGame(tiles[num], move, false);
      move += 1;
    }
  });
});


function startGame(e, move, isTarget = true){
  playerClick(e, move, isTarget);
  const playerWin = check();
  playerWin ? winPlayer(playerWin) : '';
  return move + 1;
}

function resetGame(move){
  document.getElementsByClassName('container')[0].innerHTML = '';
  initBoard();
  document.getElementsByClassName('announcer')[0].classList.add('hide');
  move = 0;
  let elemDisPlayer = document.getElementsByClassName('display-player')[0];
  elemDisPlayer.innerText = 'X';
  elemDisPlayer.classList.remove('playerX');
  elemDisPlayer.classList.remove('playerO');
  elemDisPlayer.classList.add('playerX');
 const avatarIcon = document.getElementsByClassName('icons')[0];
  document.querySelectorAll('.avatar-container').forEach((e) => {
    if(e.hasChildNodes() === true){
      avatarIcon.appendChild(e.childNodes[0]);
    }
  })
  return move;
}

function winPlayer(name){
  let winRow = document.getElementsByClassName('announcer')[0];
  winRow.classList.remove('hide');
  winRow.innerHTML = `Player <span class="player${name}">${name} Won</span>`;
}

function check(){
  const tile = document.getElementsByClassName('tile');
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < arr.length; i++) {
    if(tile[arr[i][0]].innerText === 'X'
       && tile[arr[i][1]].innerText === 'X'
       && tile[arr[i][2]].innerText === 'X'){
        return 'X';
    } else if(tile[arr[i][0]].innerText === 'O'
              && tile[arr[i][1]].innerText === 'O'
              && tile[arr[i][2]].innerText === 'O'){
      return 'O';
    }
  }
  return false;
}

function playerClick(e, move = 0, isTarget){
  let div = e;
  if(isTarget){
    div = e.target;
  }
  if(div.innerText === ''){
    let player = move % 2 ? 'O' : 'X';
    div.innerText = player;
    div.classList.add(`player${player}`);

    let playerClass = move % 2 ? 'X' : 'O';
    let elemDisPlayer = document.getElementsByClassName('display-player')[0];
    elemDisPlayer.innerText = playerClass;
    elemDisPlayer.classList.remove(`player${player}`);
    elemDisPlayer.classList.add(`player${playerClass}`);
  }
}

function initBoard(){
  for (let num = 0; num < 9; num++) {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.num = num;
    document.getElementsByClassName('container')[0].append(tile);
  }
}
