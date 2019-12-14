const isGameOver = (currentBoard) => currentBoard.sunkenShips === currentBoard.ships.length;

module.exports = isGameOver;