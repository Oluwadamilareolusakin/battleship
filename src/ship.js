
const ship = (name, start, end) => {
  const positions = [];
  let hits = 0;
  let sunk = false;

  if (start.y === end.y) {
    for (let i = start.x; i <= end.x; i += 1) {
      positions.push({ x: i, y: start.y, hit: false });
    }
  } else {
    for (let i = start.y; i <= end.y; i += 1) {
      positions.push({ x: start.x, y: i, hit: false });
    }
  }

  const hit = () => {
    hits += 1;

    if (hits === positions.length) {
      sunk = true;
    }
  };

  return { hit, positions, sunk };
};

module.exports = ship;