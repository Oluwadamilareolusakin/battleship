
const Board = require('./board');

const initializeBoard = (playerBoard, aiBoard = null) => {
  const boardHolder = document.createElement('div');
  boardHolder.classList.add('board');
  if (aiBoard !== null) {
    boardHolder.classList.add('top-board');
  } else {
    boardHolder.classList.add('bottom-board');
  }
  document.querySelector('main').appendChild(boardHolder);
  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      const block = document.createElement('div');
      block.classList.add('block');

      if (aiBoard === null) {
        block.id = `X${x}-Y${y}`;
      }


      if (y === 0) {
        block.classList.toggle('first');
      }

      block.x = x;
      block.y = y;

      block.gameboard = playerBoard;
      block.enemyboard = aiBoard;
      if (aiBoard !== null) {
        block.addEventListener('click', aiBoard.aiAttack);
        block.addEventListener('click', playerBoard.attack);
      } else if (playerBoard.board[x][y] === 1) {
        block.classList.toggle('player-ship');
      }
      boardHolder.appendChild(block);
    }
  }
};

const setup = () => {
  const playerBoard = new Board();
  const aiBoard = new Board();


  const gameStatusText = document.createElement('p');
  const gameControlsHolder = document.createElement('div');
  const resetButton = document.createElement('input');
  resetButton.value = 'Reset Game';
  resetButton.addEventListener('click', () => window.location.reload());
  resetButton.type = 'button';
  resetButton.classList.add('reset-btn');
  gameStatusText.classList.add('game-status-text');
  gameControlsHolder.classList.add('game-control-holder');
  gameControlsHolder.classList.add('row');

  document.querySelector('main').appendChild(gameControlsHolder);
  gameControlsHolder.appendChild(gameStatusText);
  gameControlsHolder.appendChild(resetButton);
  initializeBoard(aiBoard, playerBoard);
  initializeBoard(playerBoard);
};

module.exports = setup;
