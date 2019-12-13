
const ship = require('../src/ship');

describe('ships', () => {
  const newShip = ship('battleship', 3, 4);
  newShip.positions.push(1, 2, 3);
  test('Ships have positions', () => {
    expect(newShip.positions.length).toEqual(3);
  });

  test('Ships can get sunk', () => {
    expect(newShip.sunk).toEqual(false);
  });
});