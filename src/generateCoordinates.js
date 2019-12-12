
const generateCoordinates = (lastshot = null) => {
  let coordinates = { x: 0, y: 0 };

  if (lastshot == null) {
    coordinates.x = Math.floor(Math.random() * 10);
    coordinates.y = Math.floor(Math.random() * 10);
  
    return coordinates;
  }

  while (coordinates.x < 0 || coordinates.x > 9 || coordinates.y < 0 || coordinates.y > 9) {
    switch(Math.floor(Math.random() * 4)){
      case 0:
        coordinates.x = lastshot.x + 1
        coordinates.y = lastshot.y
        break;
      case 1:
        coordinates.x = lastshot.x - 1
        coordinates.y = lastshot.y
        break;
      case 2:
        coordinates.x = lastshot.x
        coordinates.y = lastshot.y + 1
        break;
      case 3:
        coordinates.x = lastshot.x
        coordinates.y = lastshot.y - 1
        break;
    };
  }

  return coordinates;
}

module.exports = generateCoordinates;
