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

    //otherwise, push ship object to fleet and mark board spaces
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

//  board.isNoShip = function (y, x, direction, length) {
//    if (direction === 'horizontal') {
//      for (i = 1; i < length; i++) {
//        for (j = x; j < x + length; j++) {
//          if (this.array[y][j].hasShip === true) return false;
//        }
//      }
//    } else if (direction === 'vertical') {
//      for (i = 1; i < length; i++) {
//        for (j = y; j < y + length; j++){
//          if (this.array[j][x].hasShip === true) return false;
//        }
//      }
//    } else {
//      return true;
//    }
//  }

  return board;

};

module.exports = createBoard;