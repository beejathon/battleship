const createShip = require('./ship.js')

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
  board.log = [];

  board.placeShip = function(y, x, direction, length, type) {

    //check if placement obeys board rules
    let placementIsValid = this.isPlacementValid(y, x, length);
    if (!placementIsValid) return;

    let spaceIsClear = this.isSpaceClear(y, x, direction, length);
    if (!spaceIsClear) return;

    //otherwise, push ship object to fleet and mark board spaces
    this.fleet.push(createShip(length, type))
    
    if (direction === 'horizontal') {
      for (i = x; i < x + length; i++) {
        this.array[y][i].hasShip = true;
        this.array[y][i].shipType = type;
      }
    }

    if (direction === 'vertical') {
      for (i = y; i < y + length; i++) {
        this.array[i][x].hasShip = true;
        this.array[i][x].shipType = type;
      }
    }
  };

  board.receiveAttack = function(y, x) {
    if (this.array[y][x].hasShip == true) {
      let type = this.array[y][x].shipType;
      let index = this.findShip(type);
      this.fleet[index].hit();
      this.fleet[index].isSunk();
      this.array[y][x].isHit = true;
    } else {
      this.array[y][x].isMissed = true;
      this.log.push(`miss ${x},${y}`)
    }
  };

  board.findShip = function(type) {
    return this.fleet.indexOf(this.fleet.find((ship) => ship.type == type))
  }

  board.isFleetSunk = function() {
    return this.fleet.every((ship) => ship.status == 'sunk')
  }

  board.isPlacementValid = function(y, x, length) {
    if (y < 0 || y > 9) {
      return false;
    } else if (x < 0 || x > 9) {
      return false;
    } else if (y + length - 1 > 9) {
      return false;
    } else if (x + length - 1 > 9) {
      return false;
    } else {
      return true;
    }
  }

  board.isSpaceClear = function(y, x, direction, length) {
    if (direction === 'horizontal') {
      for (i = x; i < x + length; i++) {
        if (this.array[y][i].hasShip === true) return false;
      }
    }
    if (direction === 'vertical') {
      for (i = y; i < y + length; i++) {
        if (this.array[i][x].hasShip === true) return false;
      }
    }
    return true;
  }

  return board;

};

module.exports = createBoard;