import createBoard from './gameBoard.js';
import randomCoords from '../helpers/helpers.js';

const createPlayer = (type, name) => {
  const player = {}
  player.type = type;
  player.name = name;
  player.isActive = false;
  player.aiMode = false;
  player.board = createBoard();
  player.moves = [];

  player.attack = function(board, y, x) {
    //check for reapeat moves
    if (this.isRepeatMove([y, x])) return false;

    //attack enemy board
    const result = board.receiveAttack(y, x);
    this.moves.push([y, x]);

    return result;
  }

  player.randomAttack = function(board) {
    let coords = randomCoords();

    //check for repeat moves
    while (this.isRepeatMove(coords)) {
      coords = randomCoords();
    }

    //attack enemy board
    const result = this.attack(board, coords[0], coords[1]);
    this.moves.push([coords[0], coords[1]]);

    return result;
  }

  // TODO: Computer AI attack
  // player.smartAttack = function(board) {
  //   const lastMove = this.moves[0]
  // }

  player.isRepeatMove = function(coords) {
    for (let i = 0; i < this.moves.length; i++) {
      if (
        this.moves[i][0] === coords[0] &&
        this.moves[i][1] === coords[1]
      ) {
        return true;
      }
    }
    return false;
  }

  return player;
};

export default createPlayer;