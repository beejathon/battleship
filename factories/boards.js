const createShip = require('../factories/ships.js')

const createBoard = () => {
  const board = {}
  board.array = [];

  for (i = 0; i <= 9; i++) {
    board.array.push(new Array)
    for (j = 0; j <= 9; j++) {
      board.array[i].push({
        hasShip: false,
        isHit: false,
        isMissed: false,
        shipType: undefined,
      })
    }
  };

  board.fleet = [];

  board.placeShip = function(y, x, direction, length) {
    this.fleet.push(createShip(length))
    
    if (direction === 'horizontal') {
      for (i = 1; i <= length; i++) {
        for (j = x; j <= length; j++) {
          this.array[y][j].hasShip = true;
          this.array[y][j].isHit = false;
        }
      }  
    }

    if (direction === 'vertical') {
      for (i = 1; i <= length; i++) {
        for (j = y; j <= length; j++) {
          this.array[j][x].hasShip = true;
          this.array[j][x].isHit = false;
        }
      }  
    }
  };

  board.receiveAttack = function(y, x) {
    if (this.array[y][x].hasShip == true) {
      this.array[y][x].isHit = true;
    } else {
      this.array[y][x].isMissed = true;
    }
  };

  return board;

};

module.exports = createBoard;