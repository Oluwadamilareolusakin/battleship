const isGameOver = require('../src/gameOver');

test('The game is over if all ships are sunken', () => {
  const ship = () => { 
  
  }

  const board = () => { 
    let ships = []
    let sunkenShips = 0;
    return {ships, sunkenShips}
  }

  const newBoard = board();
  newBoard.sunkenShips = 5;

  for (let i = 0; i < 5; i++){
    let newShip = ship();
    newBoard.ships.push(newShip);
  }


  expect(isGameOver(newBoard)).toEqual(true);


});