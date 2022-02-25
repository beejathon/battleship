/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/gameBoard.js":
/*!************************************!*\
  !*** ./src/factories/gameBoard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createShip = __webpack_require__(/*! ./ship.js */ "./src/factories/ship.js")
const randomCoords = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");

const createBoard = () => {
  const board = {}

  board.fleet = [];
  board.log = [];

  //create 10x10 2D array
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

  board.placeShip = function(y, x, direction, ship) {
    //check if placement obeys board rules
    if (!this.isPlacementValid(y, x, ship.length)) return false;
    if (!this.isSpaceClear(y, x, direction, ship.length)) return false;

    //otherwise, push ship object to fleet
    this.fleet.push(createShip(ship.length, ship.type))
    
    //mark board spaces
    if (direction === 'horizontal') {
      for (i = x; i < x + ship.length; i++) {
        this.array[y][i].hasShip = true;
        this.array[y][i].shipType = ship.type;
      }
    }

    if (direction === 'vertical') {
      for (i = y; i < y + ship.length; i++) {
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

module.exports = createBoard;

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const randomCoords = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");
const createBoard = __webpack_require__(/*! ./gameBoard.js */ "./src/factories/gameBoard.js");

const createPlayer = (type, name) => {
  const player = {}
  player.type = type;
  player.name = name;
  player.isActive = false;
  player.board = createBoard();
  player.moves = []

  player.attack = function(board, y, x) {
    const result = board.receiveAttack(y, x);
    return result;
  }

  player.randomAttack = function(board) {
    let coords = randomCoords();

    //check for valid coordinates
    while (!this.checkValidCoords(board, coords)) {
      coords = randomCoords();
    }

    //attack enemy board and store result
    const result = this.attack(board, coords[0], coords[1]);

    return result;
  }

  player.checkValidCoords = function(board, coords) {
    if (board.array[coords[0]][coords[1]].isHit === true) return false;
    if (board.array[coords[0]][coords[1]].isMissed === true) return false;
    return true;
  }

  return player;
};

module.exports = createPlayer;

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((module) => {

const createShip = (length, type) => {
  const ship = {}
  ship.status = 'afloat'
  ship.type = type;

  //add ship hit points based on length
  ship.hits = [];
  for (let i = 1; i <= length; i++) {
    ship.hits.push(i);
  }

  ship.hit = function() {
    this.hits.pop();
  }

  ship.isSunk = function() {
    this.status = this.hits.length === 0 ? 'sunk' : 'afloat';
  }

  return ship;
};

module.exports = createShip;


/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createPlayer = __webpack_require__(/*! ./factories/player.js */ "./src/factories/player.js");

let computer;
let user;

const getRandomName = () => {
  const names = [
    'Lie Bot',
    'Vlad',
    'Chucklebot',
    'Doraemon',
    'Android 16',
    'Android 17',
    'Android 18',
    'Johnny 5',
    'HAL 9000',
    'Bender Bending Rodriguez'
  ];

  let randomIndex = Math.floor(Math.random() * 10);

  return names[randomIndex]
};

const newGame = (input) => {
  //create players and populate boards
  computer = createPlayer('computer', getRandomName())
  user = createPlayer('user', input)

  computer.board.populateBoard()
  user.board.populateBoard()

  //set user to active
  user.isActive = true;

  console.log(computer, user)
};

const playTurn = () => {
  //check active player
  if (user.isActive) {
    //prompt user move
    let coords = getCoords();

    //keep prompting user for moves until miss 
    while (user.attack(computer.board, coords[0], coords[1])) {
      coords = getCoords();
    }

    //switch active user
    user.isActive = false;
    computer.isActive = true;
  }

  if (computer.isActive) {
    //generate random attack and store result
    let result = computer.randomAttack(user.board)

    //continue random attacks until miss
    while (result) {
      result = computer.randomAttack(user.board)
    }

    //switch active user
    user.isActive = true;
    computer.isActive = false;
  }  

}

const getCoords = () => {
  let x = prompt('x?', 'Enter a value from 0-9');
  let y = prompt('y?', 'Enter a value from 0-9');

  return [y, x];
}

module.exports = newGame, playTurn;

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/***/ ((module) => {

const randomCoords = () => {
  let y = Math.floor(Math.random() * 10)
  let x = Math.floor(Math.random() * 10)

  return [y, x]
}

module.exports = randomCoords;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const newGame = __webpack_require__(/*! ./gameController */ "./src/gameController.js");
const playTurn = __webpack_require__(/*! ./gameController */ "./src/gameController.js");

newGame('bunghole');
playTurn();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZVNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKVxuY29uc3QgcmFuZG9tQ29vcmRzID0gcmVxdWlyZSgnLi4vaGVscGVycy9oZWxwZXJzLmpzJyk7XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IHt9XG5cbiAgYm9hcmQuZmxlZXQgPSBbXTtcbiAgYm9hcmQubG9nID0gW107XG5cbiAgLy9jcmVhdGUgMTB4MTAgMkQgYXJyYXlcbiAgYm9hcmQuYXJyYXkgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBib2FyZC5hcnJheS5wdXNoKG5ldyBBcnJheSlcbiAgICBmb3IgKGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYm9hcmQuYXJyYXlbaV0ucHVzaCh7XG4gICAgICAgIGhhc1NoaXA6IGZhbHNlLFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIGlzTWlzc2VkOiBmYWxzZSxcbiAgICAgICAgc2hpcFR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIGJvYXJkLnBsYWNlU2hpcCA9IGZ1bmN0aW9uKHksIHgsIGRpcmVjdGlvbiwgc2hpcCkge1xuICAgIC8vY2hlY2sgaWYgcGxhY2VtZW50IG9iZXlzIGJvYXJkIHJ1bGVzXG4gICAgaWYgKCF0aGlzLmlzUGxhY2VtZW50VmFsaWQoeSwgeCwgc2hpcC5sZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzU3BhY2VDbGVhcih5LCB4LCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy9vdGhlcndpc2UsIHB1c2ggc2hpcCBvYmplY3QgdG8gZmxlZXRcbiAgICB0aGlzLmZsZWV0LnB1c2goY3JlYXRlU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSlcbiAgICBcbiAgICAvL21hcmsgYm9hcmQgc3BhY2VzXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5zaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGkgPSB5OyBpIDwgeSArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5zaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5yZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oeSwgeCkge1xuICAgICAvL2NoZWNrIGlmIHNwYWNlIGhhcyBzaGlwIG9yIG5vdFxuICAgIGlmICh0aGlzLmFycmF5W3ldW3hdLmhhc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgLy9yZWNvcmQgaGl0IG9uIHNoaXAgb2JqZWN0XG4gICAgICBsZXQgdHlwZSA9IHRoaXMuYXJyYXlbeV1beF0uc2hpcFR5cGU7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRTaGlwKHR5cGUpO1xuICAgICAgdGhpcy5mbGVldFtpbmRleF0uaGl0KCk7XG4gICAgICAvL2NoZWNrIHNoaXAgc3RhdHVzXG4gICAgICB0aGlzLmZsZWV0W2luZGV4XS5pc1N1bmsoKTtcbiAgICAgIC8vcmVjb3JkIGhpdCBvbiBib2FyZCBhcnJheVxuICAgICAgdGhpcy5hcnJheVt5XVt4XS5pc0hpdCA9IHRydWU7XG4gICAgICB0aGlzLmxvZy5wdXNoKGBoaXQgJHt4fSwke3l9YClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFycmF5W3ldW3hdLmlzTWlzc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9nLnB1c2goYG1pc3MgJHt4fSwke3l9YClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgYm9hcmQuZmluZFNoaXAgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXQuaW5kZXhPZih0aGlzLmZsZWV0LmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PSB0eXBlKSlcbiAgfTtcblxuICBib2FyZC5pc0ZsZWV0U3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN0YXR1cyA9PSAnc3VuaycpXG4gIH07XG5cbiAgYm9hcmQuaXNQbGFjZW1lbnRWYWxpZCA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCkge1xuICAgIGlmICh5IDwgMCB8fCB5ID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh4IDwgMCB8fCB4ID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh5ICsgbGVuZ3RoIC0gMSA+IDkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoeCArIGxlbmd0aCAtIDEgPiA5KSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5pc1NwYWNlQ2xlYXIgPSBmdW5jdGlvbih5LCB4LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAoaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyYXlbaV1beF0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5wb3B1bGF0ZUJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICB7IGxlbmd0aDogNSwgdHlwZTogJ2NhcnJpZXInIH0sXG4gICAgICB7IGxlbmd0aDogNCwgdHlwZTogJ2JhdHRsZXNoaXAnIH0sXG4gICAgICB7IGxlbmd0aDogMywgdHlwZTogJ3N1Ym1hcmluZScgfSxcbiAgICAgIHsgbGVuZ3RoOiAzLCB0eXBlOiAnZGVzdHJveWVyJyB9LFxuICAgICAgeyBsZW5ndGg6IDIsIHR5cGU6ICdwYXRyb2wgYm9hdCcgfSxcbiAgICBdXG5cbiAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgd2hpbGUgKCF0aGlzLnBsYWNlU2hpcChjb29yZHNbMF0sIGNvb3Jkc1sxXSwgZGlyZWN0aW9uLCBzaGlwKSkge1xuICAgICAgICBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfTtcblxuICByZXR1cm4gYm9hcmQ7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQm9hcmQ7IiwiY29uc3QgcmFuZG9tQ29vcmRzID0gcmVxdWlyZSgnLi4vaGVscGVycy9oZWxwZXJzLmpzJyk7XG5jb25zdCBjcmVhdGVCb2FyZCA9IHJlcXVpcmUoJy4vZ2FtZUJvYXJkLmpzJyk7XG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9ICh0eXBlLCBuYW1lKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHt9XG4gIHBsYXllci50eXBlID0gdHlwZTtcbiAgcGxheWVyLm5hbWUgPSBuYW1lO1xuICBwbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgcGxheWVyLmJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgcGxheWVyLm1vdmVzID0gW11cblxuICBwbGF5ZXIuYXR0YWNrID0gZnVuY3Rpb24oYm9hcmQsIHksIHgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwbGF5ZXIucmFuZG9tQXR0YWNrID0gZnVuY3Rpb24oYm9hcmQpIHtcbiAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG5cbiAgICAvL2NoZWNrIGZvciB2YWxpZCBjb29yZGluYXRlc1xuICAgIHdoaWxlICghdGhpcy5jaGVja1ZhbGlkQ29vcmRzKGJvYXJkLCBjb29yZHMpKSB7XG4gICAgICBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICB9XG5cbiAgICAvL2F0dGFjayBlbmVteSBib2FyZCBhbmQgc3RvcmUgcmVzdWx0XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hdHRhY2soYm9hcmQsIGNvb3Jkc1swXSwgY29vcmRzWzFdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwbGF5ZXIuY2hlY2tWYWxpZENvb3JkcyA9IGZ1bmN0aW9uKGJvYXJkLCBjb29yZHMpIHtcbiAgICBpZiAoYm9hcmQuYXJyYXlbY29vcmRzWzBdXVtjb29yZHNbMV1dLmlzSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGJvYXJkLmFycmF5W2Nvb3Jkc1swXV1bY29vcmRzWzFdXS5pc01pc3NlZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBsYXllcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGxheWVyOyIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSB7fVxuICBzaGlwLnN0YXR1cyA9ICdhZmxvYXQnXG4gIHNoaXAudHlwZSA9IHR5cGU7XG5cbiAgLy9hZGQgc2hpcCBoaXQgcG9pbnRzIGJhc2VkIG9uIGxlbmd0aFxuICBzaGlwLmhpdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICBzaGlwLmhpdHMucHVzaChpKTtcbiAgfVxuXG4gIHNoaXAuaGl0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oaXRzLnBvcCgpO1xuICB9XG5cbiAgc2hpcC5pc1N1bmsgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuaGl0cy5sZW5ndGggPT09IDAgPyAnc3VuaycgOiAnYWZsb2F0JztcbiAgfVxuXG4gIHJldHVybiBzaGlwO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGlwO1xuIiwiY29uc3QgY3JlYXRlUGxheWVyID0gcmVxdWlyZShcIi4vZmFjdG9yaWVzL3BsYXllci5qc1wiKTtcblxubGV0IGNvbXB1dGVyO1xubGV0IHVzZXI7XG5cbmNvbnN0IGdldFJhbmRvbU5hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1xuICAgICdMaWUgQm90JyxcbiAgICAnVmxhZCcsXG4gICAgJ0NodWNrbGVib3QnLFxuICAgICdEb3JhZW1vbicsXG4gICAgJ0FuZHJvaWQgMTYnLFxuICAgICdBbmRyb2lkIDE3JyxcbiAgICAnQW5kcm9pZCAxOCcsXG4gICAgJ0pvaG5ueSA1JyxcbiAgICAnSEFMIDkwMDAnLFxuICAgICdCZW5kZXIgQmVuZGluZyBSb2RyaWd1ZXonXG4gIF07XG5cbiAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIHJldHVybiBuYW1lc1tyYW5kb21JbmRleF1cbn07XG5cbmNvbnN0IG5ld0dhbWUgPSAoaW5wdXQpID0+IHtcbiAgLy9jcmVhdGUgcGxheWVycyBhbmQgcG9wdWxhdGUgYm9hcmRzXG4gIGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKCdjb21wdXRlcicsIGdldFJhbmRvbU5hbWUoKSlcbiAgdXNlciA9IGNyZWF0ZVBsYXllcigndXNlcicsIGlucHV0KVxuXG4gIGNvbXB1dGVyLmJvYXJkLnBvcHVsYXRlQm9hcmQoKVxuICB1c2VyLmJvYXJkLnBvcHVsYXRlQm9hcmQoKVxuXG4gIC8vc2V0IHVzZXIgdG8gYWN0aXZlXG4gIHVzZXIuaXNBY3RpdmUgPSB0cnVlO1xuXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVyLCB1c2VyKVxufTtcblxuY29uc3QgcGxheVR1cm4gPSAoKSA9PiB7XG4gIC8vY2hlY2sgYWN0aXZlIHBsYXllclxuICBpZiAodXNlci5pc0FjdGl2ZSkge1xuICAgIC8vcHJvbXB0IHVzZXIgbW92ZVxuICAgIGxldCBjb29yZHMgPSBnZXRDb29yZHMoKTtcblxuICAgIC8va2VlcCBwcm9tcHRpbmcgdXNlciBmb3IgbW92ZXMgdW50aWwgbWlzcyBcbiAgICB3aGlsZSAodXNlci5hdHRhY2soY29tcHV0ZXIuYm9hcmQsIGNvb3Jkc1swXSwgY29vcmRzWzFdKSkge1xuICAgICAgY29vcmRzID0gZ2V0Q29vcmRzKCk7XG4gICAgfVxuXG4gICAgLy9zd2l0Y2ggYWN0aXZlIHVzZXJcbiAgICB1c2VyLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgY29tcHV0ZXIuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVyLmlzQWN0aXZlKSB7XG4gICAgLy9nZW5lcmF0ZSByYW5kb20gYXR0YWNrIGFuZCBzdG9yZSByZXN1bHRcbiAgICBsZXQgcmVzdWx0ID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHVzZXIuYm9hcmQpXG5cbiAgICAvL2NvbnRpbnVlIHJhbmRvbSBhdHRhY2tzIHVudGlsIG1pc3NcbiAgICB3aGlsZSAocmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSBjb21wdXRlci5yYW5kb21BdHRhY2sodXNlci5ib2FyZClcbiAgICB9XG5cbiAgICAvL3N3aXRjaCBhY3RpdmUgdXNlclxuICAgIHVzZXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgIGNvbXB1dGVyLmlzQWN0aXZlID0gZmFsc2U7XG4gIH0gIFxuXG59XG5cbmNvbnN0IGdldENvb3JkcyA9ICgpID0+IHtcbiAgbGV0IHggPSBwcm9tcHQoJ3g/JywgJ0VudGVyIGEgdmFsdWUgZnJvbSAwLTknKTtcbiAgbGV0IHkgPSBwcm9tcHQoJ3k/JywgJ0VudGVyIGEgdmFsdWUgZnJvbSAwLTknKTtcblxuICByZXR1cm4gW3ksIHhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0dhbWUsIHBsYXlUdXJuOyIsImNvbnN0IHJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuICByZXR1cm4gW3ksIHhdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQ29vcmRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IG5ld0dhbWUgPSByZXF1aXJlKFwiLi9nYW1lQ29udHJvbGxlclwiKTtcbmNvbnN0IHBsYXlUdXJuID0gcmVxdWlyZShcIi4vZ2FtZUNvbnRyb2xsZXJcIik7XG5cbm5ld0dhbWUoJ2J1bmdob2xlJyk7XG5wbGF5VHVybigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==