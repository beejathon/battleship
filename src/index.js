const createPlayer = require("./factories/player.js");
const randomCoords = require("./helpers/helpers.js");
const randomDirection = require("./helpers/helpers.js");

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