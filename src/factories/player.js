const createBoard = require('./gameBoard.js')

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
    let coords = this.getRandomCoords();

    //check for valid coordinates
    while (!this.checkValidCoords(board, coords)) {
      coords = this.getRandomCoords();
    }

    this.attack(board, coords[0], coords[1]);
    return coords;
  }

  player.getRandomCoords = function() {
    let y = Math.floor(Math.random() * 10)
    let x = Math.floor(Math.random() * 10)

    return [y, x]
  }

  player.checkValidCoords = function(board, coords) {
    if (board.array[coords[0]][coords[1]].isHit === true) return false;
    if (board.array[coords[0]][coords[1]].isMissed === true) return false;
    return true;
  }

  return player;
};

module.exports = createPlayer;