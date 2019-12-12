const isGameOver = (currentBoard) => {
  console.log(currentBoard.sunkenShips, currentBoard.ships.length)
  return currentBoard.sunkenShips == currentBoard.ships.length;
}

module.exports = isGameOver;