const createPlayer = require("./factories/player.js");

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

  let index = Math.floor(Math.random() * 10);

  return names[index]
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

newGame('bunghole');
playTurn();