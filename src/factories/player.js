const randomCoords = require('../helpers/helpers.js');
const createBoard = require('./gameBoard.js');

const createPlayer = (type, name) => {
  const player = {}
  player.type = type;
  player.name = name;
  player.isActive = false;
  player.board = createBoard();
  player.moves = [];

  player.attack = function(board, y, x) {
    const result = board.receiveAttack(y, x);
    if (result) this.moves.push([y, x])

    return result;
  }

  player.randomAttack = function(board) {
    let coords = randomCoords();

    //check for repeat moves
    while (this.isRepeatMove(coords)) {
      coords = randomCoords();
    }

    //attack enemy board and store result
    const result = this.attack(board, coords[0], coords[1]);

    return result;
  }

  player.isRepeatMove = function(coords) {
    const repeat = this.moves.includes(coords);
    if (repeat) return true;
  }

  return player;
};

module.exports = createPlayer;