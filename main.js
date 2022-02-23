/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/gameBoard.js":
/*!************************************!*\
  !*** ./src/factories/gameBoard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createShip = __webpack_require__(/*! ./ship.js */ "./src/factories/ship.js")

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

  board.placeShip = function(y, x, direction, length, type) {
    //check if placement obeys board rules
    let placementIsValid = this.isPlacementValid(y, x, length);
    if (!placementIsValid) return;

    let spaceIsClear = this.isSpaceClear(y, x, direction, length);
    if (!spaceIsClear) return;

    //otherwise, push ship object to fleet
    this.fleet.push(createShip(length, type))
    
    //mark board spaces
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
     //check if space has ship or not
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

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const randomCoords = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");
const createBoard = __webpack_require__(/*! ./gameBoard.js */ "./src/factories/gameBoard.js")

const createPlayer = (type, name) => {
  const player = {}
  player.type = type;
  player.name = name;
  player.board = createBoard();
  player.moves = []

  player.attack = function(board, y, x) {
    board.receiveAttack(y, x);
  }

  player.randomAttack = function(board) {
    let coords = randomCoords();

    //check for valid coordinates
    while (!this.checkValidCoords(board, coords)) {
      coords = randomCoords();
    }

    this.attack(board, coords[0], coords[1]);
    return coords;
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
    this.hits.length === 0 ? this.status = 'sunk' : this.status = 'afloat';
  }

  return ship;

};

module.exports = createShip;


/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/***/ ((module) => {

const randomCoords = function() {
  let y = Math.floor(Math.random() * 10)
  let x = Math.floor(Math.random() * 10)

  return [y, x]
}

const randomDirection = function() {
  let value = Math.floor(Math.random() * 1);
  let direction = (value == 0) ? 'horizontal' : 'vertical';

  return direction;
}

module.exports = randomCoords, randomDirection;


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
const createPlayer = __webpack_require__(/*! ./factories/player.js */ "./src/factories/player.js");
const randomCoords = __webpack_require__(/*! ./helpers/helpers.js */ "./src/helpers/helpers.js");
const randomDirection = __webpack_require__(/*! ./helpers/helpers.js */ "./src/helpers/helpers.js");

const GAME_PIECES = [
  { length: 5, type: 'carrier' },
  { length: 4, type: 'battleship' },
  { length: 3, type: 'submarine' },
  { length: 3, type: 'destroyer' },
  { length: 2, type: 'patrol boat' }
]

let players = [];

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
  //clear players array
  players.splice(0, players.length)

  //create players and boards
  let computer = createPlayer('computer', getRandomName())
  let user = createPlayer('user', input)

  //radomly populate boards
  GAME_PIECES.forEach((ship) => {
      //check if placement obeys board rules
      let coords = randomCoords();
      let direction = randomDirection();
      
      let placementIsValid = computer.board.isPlacementValid(
        coords[0], 
        coords[1], 
        ship.length
        );
      let spaceIsClear = computer.board.isSpaceClear(
        coords[0], 
        coords[1], 
        direction, 
        ship.length
        );
    
      //generate new random placement if coordinates are invalid
      while (!placementIsValid && !spaceIsClear) {
        coords = randomCoords();
        direction = randomDirection();
      }

      //place ship onto player board
      computer.board.placeShip(
        coords[0], 
        coords[1], 
        randomDirection(), 
        ship.length, 
        ship.type);
  });
  
  //push player objects to players array
  players.push(user, computer)
};

newGame();
console.log(players);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQkFBbUIsbUJBQU8sQ0FBQywwQ0FBVzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FDdkdBLHFCQUFxQixtQkFBTyxDQUFDLHVEQUF1QjtBQUNwRCxvQkFBb0IsbUJBQU8sQ0FBQyxvREFBZ0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGFBQWE7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxxQkFBcUIsbUJBQU8sQ0FBQyx3REFBdUI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsc0RBQXNCO0FBQ25ELHdCQUF3QixtQkFBTyxDQUFDLHNEQUFzQjs7QUFFdEQ7QUFDQSxJQUFJLDRCQUE0QjtBQUNoQyxJQUFJLCtCQUErQjtBQUNuQyxJQUFJLDhCQUE4QjtBQUNsQyxJQUFJLDhCQUE4QjtBQUNsQyxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlU2hpcCA9IHJlcXVpcmUoJy4vc2hpcC5qcycpXG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IHt9XG5cbiAgYm9hcmQuZmxlZXQgPSBbXTtcbiAgYm9hcmQubG9nID0gW107XG5cbiAgLy9jcmVhdGUgMTB4MTAgMkQgYXJyYXlcbiAgYm9hcmQuYXJyYXkgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBib2FyZC5hcnJheS5wdXNoKG5ldyBBcnJheSlcbiAgICBmb3IgKGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYm9hcmQuYXJyYXlbaV0ucHVzaCh7XG4gICAgICAgIGhhc1NoaXA6IGZhbHNlLFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIGlzTWlzc2VkOiBmYWxzZSxcbiAgICAgICAgc2hpcFR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIGJvYXJkLnBsYWNlU2hpcCA9IGZ1bmN0aW9uKHksIHgsIGRpcmVjdGlvbiwgbGVuZ3RoLCB0eXBlKSB7XG4gICAgLy9jaGVjayBpZiBwbGFjZW1lbnQgb2JleXMgYm9hcmQgcnVsZXNcbiAgICBsZXQgcGxhY2VtZW50SXNWYWxpZCA9IHRoaXMuaXNQbGFjZW1lbnRWYWxpZCh5LCB4LCBsZW5ndGgpO1xuICAgIGlmICghcGxhY2VtZW50SXNWYWxpZCkgcmV0dXJuO1xuXG4gICAgbGV0IHNwYWNlSXNDbGVhciA9IHRoaXMuaXNTcGFjZUNsZWFyKHksIHgsIGRpcmVjdGlvbiwgbGVuZ3RoKTtcbiAgICBpZiAoIXNwYWNlSXNDbGVhcikgcmV0dXJuO1xuXG4gICAgLy9vdGhlcndpc2UsIHB1c2ggc2hpcCBvYmplY3QgdG8gZmxlZXRcbiAgICB0aGlzLmZsZWV0LnB1c2goY3JlYXRlU2hpcChsZW5ndGgsIHR5cGUpKVxuICAgIFxuICAgIC8vbWFyayBib2FyZCBzcGFjZXNcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAoaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5zaGlwVHlwZSA9IHR5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChpID0geTsgaSA8IHkgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmFycmF5W2ldW3hdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICB0aGlzLmFycmF5W2ldW3hdLnNoaXBUeXBlID0gdHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYm9hcmQucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uKHksIHgpIHtcbiAgICAgLy9jaGVjayBpZiBzcGFjZSBoYXMgc2hpcCBvciBub3RcbiAgICBpZiAodGhpcy5hcnJheVt5XVt4XS5oYXNTaGlwID09IHRydWUpIHtcbiAgICAgIGxldCB0eXBlID0gdGhpcy5hcnJheVt5XVt4XS5zaGlwVHlwZTtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZFNoaXAodHlwZSk7XG4gICAgICB0aGlzLmZsZWV0W2luZGV4XS5oaXQoKTtcbiAgICAgIHRoaXMuZmxlZXRbaW5kZXhdLmlzU3VuaygpO1xuICAgICAgdGhpcy5hcnJheVt5XVt4XS5pc0hpdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXJyYXlbeV1beF0uaXNNaXNzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5sb2cucHVzaChgbWlzcyAke3h9LCR7eX1gKVxuICAgIH1cbiAgfTtcblxuICBib2FyZC5maW5kU2hpcCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldC5pbmRleE9mKHRoaXMuZmxlZXQuZmluZCgoc2hpcCkgPT4gc2hpcC50eXBlID09IHR5cGUpKVxuICB9XG5cbiAgYm9hcmQuaXNGbGVldFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdGF0dXMgPT0gJ3N1bmsnKVxuICB9XG5cbiAgYm9hcmQuaXNQbGFjZW1lbnRWYWxpZCA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCkge1xuICAgIGlmICh5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoeCA8IDAgfHwgeCA+IDkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHkgKyBsZW5ndGggLSAxID4gOSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoeCArIGxlbmd0aCAtIDEgPiA5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGJvYXJkLmlzU3BhY2VDbGVhciA9IGZ1bmN0aW9uKHksIHgsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGkgPSB4OyBpIDwgeCArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmFycmF5W3ldW2ldLmhhc1NoaXAgPT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChpID0geTsgaSA8IHkgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hcnJheVtpXVt4XS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJvYXJkOyIsImNvbnN0IHJhbmRvbUNvb3JkcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaGVscGVycy5qcycpO1xuY29uc3QgY3JlYXRlQm9hcmQgPSByZXF1aXJlKCcuL2dhbWVCb2FyZC5qcycpXG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9ICh0eXBlLCBuYW1lKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHt9XG4gIHBsYXllci50eXBlID0gdHlwZTtcbiAgcGxheWVyLm5hbWUgPSBuYW1lO1xuICBwbGF5ZXIuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICBwbGF5ZXIubW92ZXMgPSBbXVxuXG4gIHBsYXllci5hdHRhY2sgPSBmdW5jdGlvbihib2FyZCwgeSwgeCkge1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gIH1cblxuICBwbGF5ZXIucmFuZG9tQXR0YWNrID0gZnVuY3Rpb24oYm9hcmQpIHtcbiAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG5cbiAgICAvL2NoZWNrIGZvciB2YWxpZCBjb29yZGluYXRlc1xuICAgIHdoaWxlICghdGhpcy5jaGVja1ZhbGlkQ29vcmRzKGJvYXJkLCBjb29yZHMpKSB7XG4gICAgICBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFjayhib2FyZCwgY29vcmRzWzBdLCBjb29yZHNbMV0pO1xuICAgIHJldHVybiBjb29yZHM7XG4gIH1cblxuICBwbGF5ZXIuY2hlY2tWYWxpZENvb3JkcyA9IGZ1bmN0aW9uKGJvYXJkLCBjb29yZHMpIHtcbiAgICBpZiAoYm9hcmQuYXJyYXlbY29vcmRzWzBdXVtjb29yZHNbMV1dLmlzSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGJvYXJkLmFycmF5W2Nvb3Jkc1swXV1bY29vcmRzWzFdXS5pc01pc3NlZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICByZXR1cm4gcGxheWVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXI7IiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgsIHR5cGUpID0+IHtcbiAgY29uc3Qgc2hpcCA9IHt9XG4gIHNoaXAuc3RhdHVzID0gJ2FmbG9hdCdcbiAgc2hpcC50eXBlID0gdHlwZTtcblxuICAvL2FkZCBzaGlwIGhpdCBwb2ludHMgYmFzZWQgb24gbGVuZ3RoXG4gIHNoaXAuaGl0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgIHNoaXAuaGl0cy5wdXNoKGkpO1xuICB9XG5cbiAgc2hpcC5oaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhpdHMucG9wKCk7XG4gIH1cblxuICBzaGlwLmlzU3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGl0cy5sZW5ndGggPT09IDAgPyB0aGlzLnN0YXR1cyA9ICdzdW5rJyA6IHRoaXMuc3RhdHVzID0gJ2FmbG9hdCc7XG4gIH1cblxuICByZXR1cm4gc2hpcDtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGlwO1xuIiwiY29uc3QgcmFuZG9tQ29vcmRzID0gZnVuY3Rpb24oKSB7XG4gIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cbiAgcmV0dXJuIFt5LCB4XVxufVxuXG5jb25zdCByYW5kb21EaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgbGV0IHZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMSk7XG4gIGxldCBkaXJlY3Rpb24gPSAodmFsdWUgPT0gMCkgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuXG4gIHJldHVybiBkaXJlY3Rpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQ29vcmRzLCByYW5kb21EaXJlY3Rpb247XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgY3JlYXRlUGxheWVyID0gcmVxdWlyZShcIi4vZmFjdG9yaWVzL3BsYXllci5qc1wiKTtcbmNvbnN0IHJhbmRvbUNvb3JkcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaGVscGVycy5qc1wiKTtcbmNvbnN0IHJhbmRvbURpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaGVscGVycy5qc1wiKTtcblxuY29uc3QgR0FNRV9QSUVDRVMgPSBbXG4gIHsgbGVuZ3RoOiA1LCB0eXBlOiAnY2FycmllcicgfSxcbiAgeyBsZW5ndGg6IDQsIHR5cGU6ICdiYXR0bGVzaGlwJyB9LFxuICB7IGxlbmd0aDogMywgdHlwZTogJ3N1Ym1hcmluZScgfSxcbiAgeyBsZW5ndGg6IDMsIHR5cGU6ICdkZXN0cm95ZXInIH0sXG4gIHsgbGVuZ3RoOiAyLCB0eXBlOiAncGF0cm9sIGJvYXQnIH1cbl1cblxubGV0IHBsYXllcnMgPSBbXTtcblxuY29uc3QgZ2V0UmFuZG9tTmFtZSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZXMgPSBbXG4gICAgJ0xpZSBCb3QnLFxuICAgICdWbGFkJyxcbiAgICAnQ2h1Y2tsZWJvdCcsXG4gICAgJ0RvcmFlbW9uJyxcbiAgICAnQW5kcm9pZCAxNicsXG4gICAgJ0FuZHJvaWQgMTcnLFxuICAgICdBbmRyb2lkIDE4JyxcbiAgICAnSm9obm55IDUnLFxuICAgICdIQUwgOTAwMCcsXG4gICAgJ0JlbmRlciBCZW5kaW5nIFJvZHJpZ3VleidcbiAgXTtcblxuICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgcmV0dXJuIG5hbWVzW3JhbmRvbUluZGV4XVxufTtcblxuY29uc3QgbmV3R2FtZSA9IChpbnB1dCkgPT4ge1xuICAvL2NsZWFyIHBsYXllcnMgYXJyYXlcbiAgcGxheWVycy5zcGxpY2UoMCwgcGxheWVycy5sZW5ndGgpXG5cbiAgLy9jcmVhdGUgcGxheWVycyBhbmQgYm9hcmRzXG4gIGxldCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcignY29tcHV0ZXInLCBnZXRSYW5kb21OYW1lKCkpXG4gIGxldCB1c2VyID0gY3JlYXRlUGxheWVyKCd1c2VyJywgaW5wdXQpXG5cbiAgLy9yYWRvbWx5IHBvcHVsYXRlIGJvYXJkc1xuICBHQU1FX1BJRUNFUy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAvL2NoZWNrIGlmIHBsYWNlbWVudCBvYmV5cyBib2FyZCBydWxlc1xuICAgICAgbGV0IGNvb3JkcyA9IHJhbmRvbUNvb3JkcygpO1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IHJhbmRvbURpcmVjdGlvbigpO1xuICAgICAgXG4gICAgICBsZXQgcGxhY2VtZW50SXNWYWxpZCA9IGNvbXB1dGVyLmJvYXJkLmlzUGxhY2VtZW50VmFsaWQoXG4gICAgICAgIGNvb3Jkc1swXSwgXG4gICAgICAgIGNvb3Jkc1sxXSwgXG4gICAgICAgIHNoaXAubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICBsZXQgc3BhY2VJc0NsZWFyID0gY29tcHV0ZXIuYm9hcmQuaXNTcGFjZUNsZWFyKFxuICAgICAgICBjb29yZHNbMF0sIFxuICAgICAgICBjb29yZHNbMV0sIFxuICAgICAgICBkaXJlY3Rpb24sIFxuICAgICAgICBzaGlwLmxlbmd0aFxuICAgICAgICApO1xuICAgIFxuICAgICAgLy9nZW5lcmF0ZSBuZXcgcmFuZG9tIHBsYWNlbWVudCBpZiBjb29yZGluYXRlcyBhcmUgaW52YWxpZFxuICAgICAgd2hpbGUgKCFwbGFjZW1lbnRJc1ZhbGlkICYmICFzcGFjZUlzQ2xlYXIpIHtcbiAgICAgICAgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgICAgIGRpcmVjdGlvbiA9IHJhbmRvbURpcmVjdGlvbigpO1xuICAgICAgfVxuXG4gICAgICAvL3BsYWNlIHNoaXAgb250byBwbGF5ZXIgYm9hcmRcbiAgICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgY29vcmRzWzBdLCBcbiAgICAgICAgY29vcmRzWzFdLCBcbiAgICAgICAgcmFuZG9tRGlyZWN0aW9uKCksIFxuICAgICAgICBzaGlwLmxlbmd0aCwgXG4gICAgICAgIHNoaXAudHlwZSk7XG4gIH0pO1xuICBcbiAgLy9wdXNoIHBsYXllciBvYmplY3RzIHRvIHBsYXllcnMgYXJyYXlcbiAgcGxheWVycy5wdXNoKHVzZXIsIGNvbXB1dGVyKVxufTtcblxubmV3R2FtZSgpO1xuY29uc29sZS5sb2cocGxheWVycyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9