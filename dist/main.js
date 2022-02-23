/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/gameBoard.js":
/*!************************************!*\
  !*** ./src/factories/gameBoard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createShip = __webpack_require__(/*! ./ship.js */ "./src/factories/ship.js")
const randomCoords = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");
const randomDirection = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");

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
    if (!this.isPlacementValid(y, x, ship.length)) return;
    if (!this.isSpaceClear(y, x, direction, ship.length)) return;

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
    } else {
      this.array[y][x].isMissed = true;
      this.log.push(`miss ${x},${y}`)
    }
  };

  board.findShip = function(type) {
    return this.fleet.indexOf(this.fleet.find((ship) => ship.type == type))
  };

  board.isFleetSunk = function() {
    return this.fleet.every((ship) => ship.status == 'sunk')
  };

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
    let direction = randomDirection();

    ships.forEach((ship) => {
      do {
        coords = randomCoords();
        direction = randomDirection();
      } while (!this.placeShip(coords[0], coords[1], direction, ship))
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
  let direction = Math.floor(Math.random() * 2) === 1 ? 'horizontal' : 'vertical';

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

  computer.populateBoard(computer.board)
};

newGame('bunghole');
console.log(computer, user);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQkFBbUIsbUJBQU8sQ0FBQywwQ0FBVztBQUN0QyxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBdUI7QUFDcEQsd0JBQXdCLG1CQUFPLENBQUMsdURBQXVCOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLDhCQUE4QjtBQUN0QyxRQUFRLDhCQUE4QjtBQUN0QyxRQUFRLGdDQUFnQztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUM5SEEscUJBQXFCLG1CQUFPLENBQUMsdURBQXVCO0FBQ3BELG9CQUFvQixtQkFBTyxDQUFDLG9EQUFnQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLHFCQUFxQixtQkFBTyxDQUFDLHdEQUF1QjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyxzREFBc0I7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsc0RBQXNCOztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ZhY3Rvcmllcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVTaGlwID0gcmVxdWlyZSgnLi9zaGlwLmpzJylcbmNvbnN0IHJhbmRvbUNvb3JkcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaGVscGVycy5qcycpO1xuY29uc3QgcmFuZG9tRGlyZWN0aW9uID0gcmVxdWlyZSgnLi4vaGVscGVycy9oZWxwZXJzLmpzJyk7XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IHt9XG5cbiAgYm9hcmQuZmxlZXQgPSBbXTtcbiAgYm9hcmQubG9nID0gW107XG5cbiAgLy9jcmVhdGUgMTB4MTAgMkQgYXJyYXlcbiAgYm9hcmQuYXJyYXkgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBib2FyZC5hcnJheS5wdXNoKG5ldyBBcnJheSlcbiAgICBmb3IgKGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYm9hcmQuYXJyYXlbaV0ucHVzaCh7XG4gICAgICAgIGhhc1NoaXA6IGZhbHNlLFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIGlzTWlzc2VkOiBmYWxzZSxcbiAgICAgICAgc2hpcFR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIGJvYXJkLnBsYWNlU2hpcCA9IGZ1bmN0aW9uKHksIHgsIGRpcmVjdGlvbiwgc2hpcCkge1xuICAgIC8vY2hlY2sgaWYgcGxhY2VtZW50IG9iZXlzIGJvYXJkIHJ1bGVzXG4gICAgaWYgKCF0aGlzLmlzUGxhY2VtZW50VmFsaWQoeSwgeCwgc2hpcC5sZW5ndGgpKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmlzU3BhY2VDbGVhcih5LCB4LCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKSkgcmV0dXJuO1xuXG4gICAgLy9vdGhlcndpc2UsIHB1c2ggc2hpcCBvYmplY3QgdG8gZmxlZXRcbiAgICB0aGlzLmZsZWV0LnB1c2goY3JlYXRlU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSlcbiAgICBcbiAgICAvL21hcmsgYm9hcmQgc3BhY2VzXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVt5XVtpXS5zaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGkgPSB5OyBpIDwgeSArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5zaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYm9hcmQucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uKHksIHgpIHtcbiAgICAgLy9jaGVjayBpZiBzcGFjZSBoYXMgc2hpcCBvciBub3RcbiAgICBpZiAodGhpcy5hcnJheVt5XVt4XS5oYXNTaGlwID09IHRydWUpIHtcbiAgICAgIC8vcmVjb3JkIGhpdCBvbiBzaGlwIG9iamVjdFxuICAgICAgbGV0IHR5cGUgPSB0aGlzLmFycmF5W3ldW3hdLnNoaXBUeXBlO1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kU2hpcCh0eXBlKTtcbiAgICAgIHRoaXMuZmxlZXRbaW5kZXhdLmhpdCgpO1xuICAgICAgLy9jaGVjayBzaGlwIHN0YXR1c1xuICAgICAgdGhpcy5mbGVldFtpbmRleF0uaXNTdW5rKCk7XG4gICAgICAvL3JlY29yZCBoaXQgb24gYm9hcmQgYXJyYXlcbiAgICAgIHRoaXMuYXJyYXlbeV1beF0uaXNIaXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFycmF5W3ldW3hdLmlzTWlzc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9nLnB1c2goYG1pc3MgJHt4fSwke3l9YClcbiAgICB9XG4gIH07XG5cbiAgYm9hcmQuZmluZFNoaXAgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXQuaW5kZXhPZih0aGlzLmZsZWV0LmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PSB0eXBlKSlcbiAgfTtcblxuICBib2FyZC5pc0ZsZWV0U3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN0YXR1cyA9PSAnc3VuaycpXG4gIH07XG5cbiAgYm9hcmQuaXNQbGFjZW1lbnRWYWxpZCA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCkge1xuICAgIGlmICh5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoeCA8IDAgfHwgeCA+IDkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHkgKyBsZW5ndGggLSAxID4gOSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoeCArIGxlbmd0aCAtIDEgPiA5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBib2FyZC5pc1NwYWNlQ2xlYXIgPSBmdW5jdGlvbih5LCB4LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAoaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyYXlbaV1beF0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5wb3B1bGF0ZUJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICB7IGxlbmd0aDogNSwgdHlwZTogJ2NhcnJpZXInIH0sXG4gICAgICB7IGxlbmd0aDogNCwgdHlwZTogJ2JhdHRsZXNoaXAnIH0sXG4gICAgICB7IGxlbmd0aDogMywgdHlwZTogJ3N1Ym1hcmluZScgfSxcbiAgICAgIHsgbGVuZ3RoOiAzLCB0eXBlOiAnZGVzdHJveWVyJyB9LFxuICAgICAgeyBsZW5ndGg6IDIsIHR5cGU6ICdwYXRyb2wgYm9hdCcgfSxcbiAgICBdXG5cbiAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHJhbmRvbURpcmVjdGlvbigpO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgZG8ge1xuICAgICAgICBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICAgICAgZGlyZWN0aW9uID0gcmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgICB9IHdoaWxlICghdGhpcy5wbGFjZVNoaXAoY29vcmRzWzBdLCBjb29yZHNbMV0sIGRpcmVjdGlvbiwgc2hpcCkpXG4gICAgfSlcblxuICB9O1xuXG4gIHJldHVybiBib2FyZDtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCb2FyZDsiLCJjb25zdCByYW5kb21Db29yZHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2hlbHBlcnMuanMnKTtcbmNvbnN0IGNyZWF0ZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lQm9hcmQuanMnKTtcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKHR5cGUsIG5hbWUpID0+IHtcbiAgY29uc3QgcGxheWVyID0ge31cbiAgcGxheWVyLnR5cGUgPSB0eXBlO1xuICBwbGF5ZXIubmFtZSA9IG5hbWU7XG4gIHBsYXllci5ib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gIHBsYXllci5tb3ZlcyA9IFtdXG5cbiAgcGxheWVyLmF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkLCB5LCB4KSB7XG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayh5LCB4KTtcbiAgfVxuXG4gIHBsYXllci5yYW5kb21BdHRhY2sgPSBmdW5jdGlvbihib2FyZCkge1xuICAgIGxldCBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcblxuICAgIC8vY2hlY2sgZm9yIHZhbGlkIGNvb3JkaW5hdGVzXG4gICAgd2hpbGUgKCF0aGlzLmNoZWNrVmFsaWRDb29yZHMoYm9hcmQsIGNvb3JkcykpIHtcbiAgICAgIGNvb3JkcyA9IHJhbmRvbUNvb3JkcygpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNrKGJvYXJkLCBjb29yZHNbMF0sIGNvb3Jkc1sxXSk7XG4gICAgcmV0dXJuIGNvb3JkcztcbiAgfVxuXG4gIHBsYXllci5jaGVja1ZhbGlkQ29vcmRzID0gZnVuY3Rpb24oYm9hcmQsIGNvb3Jkcykge1xuICAgIGlmIChib2FyZC5hcnJheVtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0uaXNIaXQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoYm9hcmQuYXJyYXlbY29vcmRzWzBdXVtjb29yZHNbMV1dLmlzTWlzc2VkID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gcGxheWVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXI7IiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgsIHR5cGUpID0+IHtcbiAgY29uc3Qgc2hpcCA9IHt9XG4gIHNoaXAuc3RhdHVzID0gJ2FmbG9hdCdcbiAgc2hpcC50eXBlID0gdHlwZTtcblxuICAvL2FkZCBzaGlwIGhpdCBwb2ludHMgYmFzZWQgb24gbGVuZ3RoXG4gIHNoaXAuaGl0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgIHNoaXAuaGl0cy5wdXNoKGkpO1xuICB9XG5cbiAgc2hpcC5oaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhpdHMucG9wKCk7XG4gIH1cblxuICBzaGlwLmlzU3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGl0cy5sZW5ndGggPT09IDAgPyB0aGlzLnN0YXR1cyA9ICdzdW5rJyA6IHRoaXMuc3RhdHVzID0gJ2FmbG9hdCc7XG4gIH1cblxuICByZXR1cm4gc2hpcDtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGlwO1xuIiwiY29uc3QgcmFuZG9tQ29vcmRzID0gZnVuY3Rpb24oKSB7XG4gIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cbiAgcmV0dXJuIFt5LCB4XVxufVxuXG5jb25zdCByYW5kb21EaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgbGV0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcblxuICByZXR1cm4gZGlyZWN0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUNvb3JkcywgcmFuZG9tRGlyZWN0aW9uO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IGNyZWF0ZVBsYXllciA9IHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9wbGF5ZXIuanNcIik7XG5jb25zdCByYW5kb21Db29yZHMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2hlbHBlcnMuanNcIik7XG5jb25zdCByYW5kb21EaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9oZWxwZXJzL2hlbHBlcnMuanNcIik7XG5cbmxldCBjb21wdXRlcjtcbmxldCB1c2VyO1xuXG5jb25zdCBnZXRSYW5kb21OYW1lID0gKCkgPT4ge1xuICBjb25zdCBuYW1lcyA9IFtcbiAgICAnTGllIEJvdCcsXG4gICAgJ1ZsYWQnLFxuICAgICdDaHVja2xlYm90JyxcbiAgICAnRG9yYWVtb24nLFxuICAgICdBbmRyb2lkIDE2JyxcbiAgICAnQW5kcm9pZCAxNycsXG4gICAgJ0FuZHJvaWQgMTgnLFxuICAgICdKb2hubnkgNScsXG4gICAgJ0hBTCA5MDAwJyxcbiAgICAnQmVuZGVyIEJlbmRpbmcgUm9kcmlndWV6J1xuICBdO1xuXG4gIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICByZXR1cm4gbmFtZXNbcmFuZG9tSW5kZXhdXG59O1xuXG5jb25zdCBuZXdHYW1lID0gKGlucHV0KSA9PiB7XG4gIC8vY3JlYXRlIHBsYXllcnMgYW5kIHBvcHVsYXRlIGJvYXJkc1xuICBjb21wdXRlciA9IGNyZWF0ZVBsYXllcignY29tcHV0ZXInLCBnZXRSYW5kb21OYW1lKCkpXG4gIHVzZXIgPSBjcmVhdGVQbGF5ZXIoJ3VzZXInLCBpbnB1dClcblxuICBjb21wdXRlci5wb3B1bGF0ZUJvYXJkKGNvbXB1dGVyLmJvYXJkKVxufTtcblxubmV3R2FtZSgnYnVuZ2hvbGUnKTtcbmNvbnNvbGUubG9nKGNvbXB1dGVyLCB1c2VyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=