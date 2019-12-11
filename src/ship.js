 
const ship = (name, start, end) => {
  let positions = [];
  let sunk = false;

    if (start.y == end.y) {
      for (let i = start.x; i <= end.x; i++) {
        positions.push({x: i, y: start.y, hit: false});
      }
    } else {
      for (let i = start.y; i <= end.y; i++) {
        positions.push({x: start.x, y: i, hit: false})
      }
    }
  
  const hit = (target) => {
    let index = positions.indexOf(positions.find((position) => position.x == target.x && position.y == target.y))
    positions[index].hit = true;

    if (positions.every(position => position.hit == true)) {
      sunk = true;
    }
  }

  return {hit, positions, sunk}
}

module.exports =  ship; 