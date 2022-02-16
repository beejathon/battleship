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

  board.placeShip = function(y, x, direction, length, type) {
    this.fleet.push(createShip(length, type))
    
    if (direction === 'horizontal') {
      for (i = 1; i < length; i++) {
        for (j = x; j < x + length; j++) {
          this.array[y][j].hasShip = true;
          this.array[y][j].shipType = type;
        }
      }  
    }

    if (direction === 'vertical') {
      for (i = 1; i < length; i++) {
        for (j = y; j < y + length; j++) {
          this.array[j][x].hasShip = true;
          this.array[j][x].shipType = type;
        }
      }  
    }
  };

  board.receiveAttack = function(y, x) {
    if (this.array[y][x].hasShip == true) {
      let type = this.array[y][x].shipType;
      let index = this.findShip(type);
      this.fleet[index].hits.pop();
      this.array[y][x].isHit = true;
    } else {
      this.array[y][x].isMissed = true;
    }
  };

  board.findShip = function(type) {
    return this.fleet.indexOf(this.fleet.find((ship) => ship.type == type))
  }

  return board;

};

module.exports = createBoard;