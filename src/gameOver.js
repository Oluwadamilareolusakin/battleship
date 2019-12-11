const isWinningMove = (player, currentBoard) => {
  let board = document.querySelectorAll('.board')[0];
  let gameStatusDiv = document.querySelector('.game-status-text');

  if (currentBoard.sunkenShips >= 5) {
    board.style.pointerEvents = 'none';
    if (player == 'player') {
      gameStatusDiv.innerHTML = 'You Win!';
    } else {
      gameStatusDiv.innerHTML = 'You Lose!';
    }
  }
}

module.exports = isWinningMove;