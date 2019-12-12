const generateCoordinates = require('../src/generateCoordinates');

test('It generates random coordinates', () => {
  const coordinates1 = generateCoordinates();
  const coordinates2 = generateCoordinates();
  expect(coordinates1).not.toEqual(coordinates2);
})