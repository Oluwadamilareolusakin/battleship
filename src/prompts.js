const setStatusMessage = (player) => {
  const gameStatusDiv = document.querySelector('.game-status-text');
  if (player === 'player') {
    gameStatusDiv.innerHTML = "Congrats you're a sinker of ships, officially!";
  } else {
    gameStatusDiv.innerHTML = 'Computer got you man!';
  }
};

module.exports = setStatusMessage;
