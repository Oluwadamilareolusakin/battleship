const isGameOver = require('../src/gameOver');

test('The game is over if all ships are sunken', () => {
  const ship = () => { 
   let sunk = true
   return {sunk}
  }

  const board = () => { 
    let ships = []
    return {ships}
  }

  const newBoard = board();

  for (let i = 0; i < 6; i++){
    let newShip = ship;
    newBoard.ships.push(newShip);
  }

  expect(isGameOver(newBoard)).toEqual(true);


});