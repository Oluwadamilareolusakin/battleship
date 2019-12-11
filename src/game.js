const board = require('./board');

const initializeBoard = (playerBoard, aiBoard = null) => {
  let boardHolder = document.createElement('div');
  boardHolder.classList.add('board');
  if (aiBoard !== null) {
    boardHolder.classList.add("top-board");
  } else {
    boardHolder.classList.add("bottom-board");
  }
  document.body.appendChild(boardHolder);
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      let block = document.createElement('div');
      block.classList.add('block');

      if (aiBoard === null) {
        block.id = `X${x}-Y${y}`
      }


      if (y == 0) {
        block.classList.toggle('first');
      }
      
      block.x = x;
      block.y = y;

      block.gameboard = playerBoard;
      block.enemyboard = aiBoard;
      if (aiBoard !== null) {
        block.addEventListener('click', aiBoard.aiAttack);
        block.addEventListener('click', playerBoard.attack);
      } else if (playerBoard.board[x][y] == 1) {
        block.classList.toggle('player-ship');
      }
      boardHolder.appendChild(block);
    }
  }
}

const setup = () => {
  let playerBoard = new board();
  let aiBoard = new board();

  initializeBoard(aiBoard, playerBoard);

  let gameStatusText = document.createElement('div');
  gameStatusText.classList.add('game-status-text');
  document.body.appendChild(gameStatusText);


  let resetButton = document.createElement('input');
  resetButton.type = "button";

  resetButton.classList.add('reset-btn');
  resetButton.value = "New Game";
  resetButton.addEventListener('click', () => window.location.reload());
  document.body.appendChild(resetButton);


  initializeBoard(playerBoard);
}

module.exports = setup;
