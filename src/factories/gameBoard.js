import createShip from './ship.js';
import randomCoords from '../helpers/helpers.js';

const createBoard = () => {
  const board = {}

  board.fleet = [];
  board.log = [];

  //create 10x10 2D array
  board.array = [];
  for (let i = 0; i <= 9; i++) {
    board.array.push(new Array)
    for (let j = 0; j <= 9; j++) {
      board.array[i].push({
        hasShip: false,
        isHit: false,
        isMissed: false,
        shipType: undefined,
      })
    }
  };

  board.placeShip = function(y, x, direction, ship) {
    //check if placement obeys board rules
    if (!this.isPlacementValid(y, x, ship.length)) return false;
    if (!this.isSpaceClear(y, x, direction, ship.length)) return false;

    //otherwise, push ship object to fleet
    this.fleet.push(createShip(ship.length, ship.type))
    
    //mark board spaces
    if (direction === 'horizontal') {
      for (let i = x; i < x + ship.length; i++) {
        this.array[y][i].hasShip = true;
        this.array[y][i].shipType = ship.type;
      }
    }

    if (direction === 'vertical') {
      for (let i = y; i < y + ship.length; i++) {
        this.array[i][x].hasShip = true;
        this.array[i][x].shipType = ship.type;
      }
    }

    return true;
  };

  board.receiveAttack = function(y, x) {
     //check if space has ship or not
    if (this.array[y][x].hasShip == true) {
      //record hit on ship object
      let type = this.array[y][x].shipType;
      let index = this.findShip(type);
      this.fleet[index].hit();
      //check ship status
      this.fleet[index].isSunk();
      //record hit on board array
      this.array[y][x].isHit = true;
      this.log.push(`hit ${x},${y}`)
      return true;
    } else {
      this.array[y][x].isMissed = true;
      this.log.push(`miss ${x},${y}`)
      return false;
    }
  };

  board.findShip = function(type) {
    return this.fleet.indexOf(this.fleet.find((ship) => ship.type == type))
  };

  board.isFleetSunk = function() {
    return this.fleet.every((ship) => ship.status == 'sunk')
  };

  board.isPlacementValid = function(y, x, length) {
    if (y < 0 || y > 9) return false;
    if (x < 0 || x > 9) return false;
    if (y + length - 1 > 9) return false;
    if (x + length - 1 > 9) return false;

    return true;
  };

  board.isSpaceClear = function(y, x, direction, length) {
    if (direction === 'horizontal') {
      for (let i = x; i < x + length; i++) {
        if (this.array[y][i].hasShip === true) return false;
      }
    }
    if (direction === 'vertical') {
      for (let i = y; i < y + length; i++) {
        if (this.array[i][x].hasShip === true) return false;
      }
    }
    return true;
  };

  board.populateBoard = function() {
    const ships = [
      { length: 5, type: 'carrier' },
      { length: 4, type: 'battleship' },
      { length: 3, type: 'submarine' },
      { length: 3, type: 'destroyer' },
      { length: 2, type: 'patrol boat' },
    ]

    let coords = randomCoords();
    let direction = 'horizontal'

    ships.forEach((ship) => {
      while (!this.placeShip(coords[0], coords[1], direction, ship)) {
        coords = randomCoords();
        direction = Math.floor(Math.random() * 2) === 1 ? 'vertical' : 'horizontal';
      }
    })

  };

  return board;

};

export default createBoard;