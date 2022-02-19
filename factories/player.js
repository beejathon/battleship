const createBoard = require("./gameBoard")

const createPlayer = (type) => {
  const player = {}
  player.type = type;
  player.board = createBoard();

  return player;
};

module.exports = createPlayer;