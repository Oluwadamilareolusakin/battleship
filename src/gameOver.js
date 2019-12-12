const isGameOver = (currentBoard) => {
  currentBoard.ships.forEach(ship => {
    if (ship.sunk == false) return false;
  });
  return true;
}

module.exports = isGameOver;