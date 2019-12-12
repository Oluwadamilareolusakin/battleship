const ship = require('./ship');
const generateCoordinates = require('./generateCoordinates'); 
const setStatusMessage = require('./prompts');
const isGameOver = require('./gameOver');

class Gameboard {
  constructor() {
    let self = this;
    this.sunkenShips = 0;
    this.ships = [];
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill(0));
    }

    const randomPlacement = (shipLength) => {
        let x = -5;
        let y = -5;
        while (x + shipLength < 0 || x + shipLength > 9 || y + shipLength < 0 || y + shipLength > 9) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
        
        let shipDirection = Math.random() < 0.5 ? "horizontal" : "vertical";
        let newShip;
        if (shipDirection == "vertical") {
          newShip = ship(`ship${shipLength+1}`, {x, y}, {x, y: y+shipLength});
        } else {
          newShip = ship(`ship${shipLength+1}`, {x, y}, {x: x+shipLength, y});
        }

        let positionisValid = true
        newShip.positions.forEach(position => {
          if (self.board[position.x][position.y] != 0) {
            positionisValid = false;
          }
        });
        
        if (positionisValid) {
          self.ships.push(newShip);
          newShip.positions.forEach(position => {
            self.board[position.x][position.y] = 1;
          });
        }
        
        return positionisValid;
    }

    let shipLengths = [4,3,3,2,1];
    shipLengths.forEach(shipLength => {
      let placed;
      do {
        placed = randomPlacement(shipLength);
      } while (!placed)

    });
    let count = 0;
    this.board.forEach(row => row.forEach((coordinate) => {
      if (coordinate == 1) { count++; }
    }));
    
    this.lastShotSucceeded = false;
    this.lastShotXY = null;
    this.shotsSinceLastHit = 0;
  }
  
  attack(event){  
    let targetBlock = this.gameboard.board[this.x][this.y];
    let gameStatusText = document.querySelector('.game-status-text');
    gameStatusText.innerHTML = '';
    
    this.gameboard.findAndHitShip(this.gameboard, event.target, 'player');
    
    if (targetBlock == 1) {
      event.target.classList.toggle('red');
    } else {
      targetBlock = 2;
      event.target.classList.toggle('white');
    }

    this.removeEventListener('click', this.gameboard.attack);
  }
  
  aiAttack(){
    this.removeEventListener('click', this.enemyboard.aiAttack);
    let shotTarget;
    
    if (this.enemyboard.lastShotSucceeded) {
      shotTarget = this.enemyboard.shootTargetedShot(this);
    } else {
      shotTarget = this.enemyboard.shootRandomShot(this);
    }
    
    let computerTarget = document.getElementById(`X${shotTarget.x}-Y${shotTarget.y}`);
    
    if (this.enemyboard.board[shotTarget.x][shotTarget.y] == 1) {
      computerTarget.classList.toggle('red');
      this.enemyboard.lastShotSucceeded = true;
      this.enemyboard.shotsSinceLastHit = 0;
      this.enemyboard.lastShotXY = { x: shotTarget.x, y: shotTarget.y };
      this.enemyboard.findAndHitShip(this.enemyboard, shotTarget, 'Computer')
      
    } else {
      computerTarget.classList.toggle('white');
      this.enemyboard.shotsSinceLastHit++;
      if (this.enemyboard.shotsSinceLastHit >= 4) {
        this.enemyboard.lastShotSucceeded = false;
      }
    }
    this.enemyboard.board[shotTarget.x][shotTarget.y] = 2;
  }
  
  shootTargetedShot(target){
    let count = 1;
    let shotTarget = generateCoordinates(target.enemyboard.lastShotXY);
    while (target.enemyboard.board[shotTarget.x][shotTarget.y] == 2 && count < 5) {
      shotTarget = generateCoordinates(target.enemyboard.lastShotXY);
      count++;
    }

    if (count == 5) {
      shotTarget = target.enemyboard.shootRandomShot(target);
    }

    return shotTarget;
  }

  shootRandomShot(target){
    let shotTarget = generateCoordinates();
    while (target.enemyboard.board[shotTarget.x][shotTarget.y] == 2) {
      shotTarget = generateCoordinates();
    }
    return shotTarget;
  }

  findAndHitShip(targetBoard, target, player){
      for (let ship of targetBoard.ships) {
        for (let position of ship.positions) {
          if (position.x == target.x && position.y == target.y) {
            ship.hit({x: target.x, y: target.y});
            if (isGameOver(targetBoard)){
              targetBoard.displayWinner(player)
              setStatusMessage(player);
            };

            
            if (ship.sunk) {
              targetBoard.sunkenShips++;
              }
              break;
          }
        }
      }
    }

    displayWinner(player){
      let gameStatusText = document.querySelector('.game-status-text');
      if(player === 'player'){
        gameStatusText.innerHTML = 'You won!'
        return
      }
      gamestatusText.innerHTML = 'You got your ass kicked by AI'
      return
    }
  
}

module.exports = Gameboard;