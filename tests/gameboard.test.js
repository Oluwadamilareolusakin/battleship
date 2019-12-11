const board = require('../src/board');

describe('Game board', () => {
  const newBoard = new board();

  test('It holds 5 ships', () => {
    expect(newBoard.ships.length).toEqual(5);
  })

  test('It keeps track of sunken ships', () => {
    expect(newBoard.sunkenShips).toEqual(0);
    newBoard.sunkenShips++
    expect(newBoard.sunkenShips).toEqual(1);
  })
})