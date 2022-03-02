import './styles.css';
import createPlayer from './factories/player.js';
import { renderUserBoard } from './display.js';
import { renderComputerBoard } from './display.js';
import { addListeners } from './display.js';

let user;
let computer;

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
  user = createPlayer('user', input)
  computer = createPlayer('computer', getRandomName())
  computer.board.populateBoard()
  user.board.populateBoard()

  //set user to active
  user.isActive = true;

  //render DOM board
  renderUserBoard(user);
  renderComputerBoard(computer);
  addListeners();
};

function userTurn(coords) {
  let result = user.attack(computer.board, coords[0], coords[1])

  if (result) {
    user.isActive = true;
    computer.isActive = false;
  } else {
    user.isActive = true;
    computer.isActive = false;
  }
  nextTurn();
}

const computerTurn = () => {
  //generate random attack and store result
  let result = computer.randomAttack(user.board)

  //continue random attacks until miss
  while (result) {
    result = computer.randomAttack(user.board)
  }

  user.isActive = true;
  computer.isActive = false;
  nextTurn();
}

const nextTurn = () => {
  //check for win
  const gameOver = checkWin();
  if (gameOver) game = newGame('CORNHOLIO')

  //check active user
  if (user.isActive) return;
  if (computer.isActive) computerTurn();
}

const checkWin = () => {
  if (user.board.isFleetSunk()) {
    alert(`${user.name} HAS LOST THE BATTLE OF SHIPS`)
    return true;
  }
  if (computer.board.isFleetSunk()) {
    alert(`${computer.name} HAS LOST THE BATTLE OF SHIPS`)
    return true;
  }
  return false;
}

let game = newGame('bungholio');

export default userTurn;