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
  let x = window.prompt('x?');
  let y = window.prompt('y?')

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

newGame('bunghole');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZVNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKVxuY29uc3QgcmFuZG9tQ29vcmRzID0gcmVxdWlyZSgnLi4vaGVscGVycy9oZWxwZXJzLmpzJyk7XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IHt9XG5cbiAgYm9hcmQuZmxlZXQgPSBbXTtcbiAgYm9hcmQubG9nID0gW107XG5cbiAgLy9jcmVhdGUgMTB4MTAgMkQgYXJyYXlcbiAgYm9hcmQuYXJyYXkgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBib2FyZC5hcnJheS5wdXNoKG5ldyBBcnJheSlcbiAgICBmb3IgKGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYm9hcmQuYXJyYXlbaV0ucHVzaCh7XG4gICAgICAgIGhhc1NoaXA6IGZhbHNlLFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIGlzTWlzc2VkOiBmYWxzZSxcbiAgICAgICAgc2hpcFR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIGJvYXJkLnBsYWNlU2hpcCA9IGZ1bmN0aW9uKHksIHgsIGRpcmVjdGlvbiwgc2hpcCkge1xuICAgIC8vY2hlY2sgaWYgcGxhY2VtZW50IG9iZXlzIGJvYXJkIHJ1bGVzXG4gICAgaWYgKCF0aGlzLmlzUGxhY2VtZW50VmFsaWQoeSwgeCwgc2hpcC5sZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzU3BhY2VDbGVhcih5LCB4LCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy9vdGhlcndpc2UsIHB1c2ggc2hpcCBvYmplY3QgdG8gZmxlZXRcbiAgICB0aGlzLmZsZWV0LnB1c2goY3JlYXRlU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSlcbiAgICBcbiAgICAvL21hcmsgYm9hcmQgc3BhY2VzXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5zaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGkgPSB5OyBpIDwgeSArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5zaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5yZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oeSwgeCkge1xuICAgICAvL2NoZWNrIGlmIHNwYWNlIGhhcyBzaGlwIG9yIG5vdFxuICAgIGlmICh0aGlzLmFycmF5W3ldW3hdLmhhc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgLy9yZWNvcmQgaGl0IG9uIHNoaXAgb2JqZWN0XG4gICAgICBsZXQgdHlwZSA9IHRoaXMuYXJyYXlbeV1beF0uc2hpcFR5cGU7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRTaGlwKHR5cGUpO1xuICAgICAgdGhpcy5mbGVldFtpbmRleF0uaGl0KCk7XG4gICAgICAvL2NoZWNrIHNoaXAgc3RhdHVzXG4gICAgICB0aGlzLmZsZWV0W2luZGV4XS5pc1N1bmsoKTtcbiAgICAgIC8vcmVjb3JkIGhpdCBvbiBib2FyZCBhcnJheVxuICAgICAgdGhpcy5hcnJheVt5XVt4XS5pc0hpdCA9IHRydWU7XG4gICAgICB0aGlzLmxvZy5wdXNoKGBoaXQgJHt4fSwke3l9YClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFycmF5W3ldW3hdLmlzTWlzc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9nLnB1c2goYG1pc3MgJHt4fSwke3l9YClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgYm9hcmQuZmluZFNoaXAgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXQuaW5kZXhPZih0aGlzLmZsZWV0LmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PSB0eXBlKSlcbiAgfTtcblxuICBib2FyZC5pc0ZsZWV0U3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN0YXR1cyA9PSAnc3VuaycpXG4gIH07XG5cbiAgYm9hcmQuaXNQbGFjZW1lbnRWYWxpZCA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCkge1xuICAgIGlmICh5IDwgMCB8fCB5ID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh4IDwgMCB8fCB4ID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh5ICsgbGVuZ3RoIC0gMSA+IDkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoeCArIGxlbmd0aCAtIDEgPiA5KSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5pc1NwYWNlQ2xlYXIgPSBmdW5jdGlvbih5LCB4LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAoaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyYXlbaV1beF0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5wb3B1bGF0ZUJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICB7IGxlbmd0aDogNSwgdHlwZTogJ2NhcnJpZXInIH0sXG4gICAgICB7IGxlbmd0aDogNCwgdHlwZTogJ2JhdHRsZXNoaXAnIH0sXG4gICAgICB7IGxlbmd0aDogMywgdHlwZTogJ3N1Ym1hcmluZScgfSxcbiAgICAgIHsgbGVuZ3RoOiAzLCB0eXBlOiAnZGVzdHJveWVyJyB9LFxuICAgICAgeyBsZW5ndGg6IDIsIHR5cGU6ICdwYXRyb2wgYm9hdCcgfSxcbiAgICBdXG5cbiAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgd2hpbGUgKCF0aGlzLnBsYWNlU2hpcChjb29yZHNbMF0sIGNvb3Jkc1sxXSwgZGlyZWN0aW9uLCBzaGlwKSkge1xuICAgICAgICBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfTtcblxuICByZXR1cm4gYm9hcmQ7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQm9hcmQ7IiwiY29uc3QgcmFuZG9tQ29vcmRzID0gcmVxdWlyZSgnLi4vaGVscGVycy9oZWxwZXJzLmpzJyk7XG5jb25zdCBjcmVhdGVCb2FyZCA9IHJlcXVpcmUoJy4vZ2FtZUJvYXJkLmpzJyk7XG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9ICh0eXBlLCBuYW1lKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHt9XG4gIHBsYXllci50eXBlID0gdHlwZTtcbiAgcGxheWVyLm5hbWUgPSBuYW1lO1xuICBwbGF5ZXIuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICBwbGF5ZXIubW92ZXMgPSBbXVxuXG4gIHBsYXllci5hdHRhY2sgPSBmdW5jdGlvbihib2FyZCwgeSwgeCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBsYXllci5yYW5kb21BdHRhY2sgPSBmdW5jdGlvbihib2FyZCkge1xuICAgIGxldCBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcblxuICAgIC8vY2hlY2sgZm9yIHZhbGlkIGNvb3JkaW5hdGVzXG4gICAgd2hpbGUgKCF0aGlzLmNoZWNrVmFsaWRDb29yZHMoYm9hcmQsIGNvb3JkcykpIHtcbiAgICAgIGNvb3JkcyA9IHJhbmRvbUNvb3JkcygpO1xuICAgIH1cblxuICAgIC8vYXR0YWNrIGVuZW15IGJvYXJkIGFuZCBzdG9yZSByZXN1bHRcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmF0dGFjayhib2FyZCwgY29vcmRzWzBdLCBjb29yZHNbMV0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBsYXllci5jaGVja1ZhbGlkQ29vcmRzID0gZnVuY3Rpb24oYm9hcmQsIGNvb3Jkcykge1xuICAgIGlmIChib2FyZC5hcnJheVtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0uaXNIaXQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoYm9hcmQuYXJyYXlbY29vcmRzWzBdXVtjb29yZHNbMV1dLmlzTWlzc2VkID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gcGxheWVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXI7IiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgsIHR5cGUpID0+IHtcbiAgY29uc3Qgc2hpcCA9IHt9XG4gIHNoaXAuc3RhdHVzID0gJ2FmbG9hdCdcbiAgc2hpcC50eXBlID0gdHlwZTtcblxuICAvL2FkZCBzaGlwIGhpdCBwb2ludHMgYmFzZWQgb24gbGVuZ3RoXG4gIHNoaXAuaGl0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgIHNoaXAuaGl0cy5wdXNoKGkpO1xuICB9XG5cbiAgc2hpcC5oaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhpdHMucG9wKCk7XG4gIH1cblxuICBzaGlwLmlzU3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5oaXRzLmxlbmd0aCA9PT0gMCA/ICdzdW5rJyA6ICdhZmxvYXQnO1xuICB9XG5cbiAgcmV0dXJuIHNoaXA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNoaXA7XG4iLCJjb25zdCBjcmVhdGVQbGF5ZXIgPSByZXF1aXJlKFwiLi9mYWN0b3JpZXMvcGxheWVyLmpzXCIpO1xuXG5sZXQgY29tcHV0ZXI7XG5sZXQgdXNlcjtcblxuY29uc3QgZ2V0UmFuZG9tTmFtZSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZXMgPSBbXG4gICAgJ0xpZSBCb3QnLFxuICAgICdWbGFkJyxcbiAgICAnQ2h1Y2tsZWJvdCcsXG4gICAgJ0RvcmFlbW9uJyxcbiAgICAnQW5kcm9pZCAxNicsXG4gICAgJ0FuZHJvaWQgMTcnLFxuICAgICdBbmRyb2lkIDE4JyxcbiAgICAnSm9obm55IDUnLFxuICAgICdIQUwgOTAwMCcsXG4gICAgJ0JlbmRlciBCZW5kaW5nIFJvZHJpZ3VleidcbiAgXTtcblxuICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgcmV0dXJuIG5hbWVzW3JhbmRvbUluZGV4XVxufTtcblxuY29uc3QgbmV3R2FtZSA9IChpbnB1dCkgPT4ge1xuICAvL2NyZWF0ZSBwbGF5ZXJzIGFuZCBwb3B1bGF0ZSBib2FyZHNcbiAgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoJ2NvbXB1dGVyJywgZ2V0UmFuZG9tTmFtZSgpKVxuICB1c2VyID0gY3JlYXRlUGxheWVyKCd1c2VyJywgaW5wdXQpXG5cbiAgY29tcHV0ZXIuYm9hcmQucG9wdWxhdGVCb2FyZCgpXG4gIHVzZXIuYm9hcmQucG9wdWxhdGVCb2FyZCgpXG5cbiAgY29uc29sZS5sb2coY29tcHV0ZXIsIHVzZXIpXG59O1xuXG5jb25zdCBwbGF5VHVybiA9ICgpID0+IHtcbiAgLy9jaGVjayBhY3RpdmUgcGxheWVyXG4gIGlmICh1c2VyLmlzQWN0aXZlKSB7XG4gICAgLy9wcm9tcHQgdXNlciBtb3ZlXG4gICAgbGV0IGNvb3JkcyA9IGdldENvb3JkcygpO1xuXG4gICAgLy9rZWVwIHByb21wdGluZyB1c2VyIGZvciBtb3ZlcyB1bnRpbCBtaXNzIFxuICAgIHdoaWxlICh1c2VyLmF0dGFjayhjb21wdXRlci5ib2FyZCwgY29vcmRzWzBdLCBjb29yZHNbMV0pKSB7XG4gICAgICBjb29yZHMgPSBnZXRDb29yZHMoKTtcbiAgICB9XG5cbiAgICAvL3N3aXRjaCBhY3RpdmUgdXNlclxuICAgIHVzZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBjb21wdXRlci5pc0FjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZiAoY29tcHV0ZXIuaXNBY3RpdmUpIHtcbiAgICAvL2dlbmVyYXRlIHJhbmRvbSBhdHRhY2sgYW5kIHN0b3JlIHJlc3VsdFxuICAgIGxldCByZXN1bHQgPSBjb21wdXRlci5yYW5kb21BdHRhY2sodXNlci5ib2FyZClcblxuICAgIC8vY29udGludWUgcmFuZG9tIGF0dGFja3MgdW50aWwgbWlzc1xuICAgIHdoaWxlIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayh1c2VyLmJvYXJkKVxuICAgIH1cblxuICAgIC8vc3dpdGNoIGFjdGl2ZSB1c2VyXG4gICAgdXNlci5pc0FjdGl2ZSA9IHRydWU7XG4gICAgY29tcHV0ZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfSAgXG5cbn1cblxuY29uc3QgZ2V0Q29vcmRzID0gKCkgPT4ge1xuICBsZXQgeCA9IHdpbmRvdy5wcm9tcHQoJ3g/Jyk7XG4gIGxldCB5ID0gd2luZG93LnByb21wdCgneT8nKVxuXG4gIHJldHVybiBbeSwgeF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZSwgcGxheVR1cm47IiwiY29uc3QgcmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG4gIHJldHVybiBbeSwgeF1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21Db29yZHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgbmV3R2FtZSA9IHJlcXVpcmUoXCIuL2dhbWVDb250cm9sbGVyXCIpO1xuXG5uZXdHYW1lKCdidW5naG9sZScpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==