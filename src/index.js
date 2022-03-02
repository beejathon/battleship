import './styles.css';
import createPlayer from './factories/player.js';
import { renderUserBoard } from './display.js';
import { renderComputerBoard } from './display.js';
import { addListeners } from './display.js';
import { updateLog } from './display.js'

let user;
let computer;
let battleLog = [];

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
  user.board.populateBoard()
  computer.board.populateBoard()

  //set user to active
  user.isActive = true;

  //render DOM board
  renderUserBoard(user);
  renderComputerBoard(computer);
  addListeners();
};

const userTurn = (coords) => {
  let result = user.attack(computer.board, coords[0], coords[1])
  battleLog.push(`${user.name}: ${result}!`)
  user.isActive = false;
  computer.isActive = true;
  updateLog();
  nextTurn();
}

const computerTurn = () => {
  //generate random attack and store result
  let result = computer.randomAttack(user.board)
  result = computer.randomAttack(user.board)
  battleLog.push(`${computer.name}: ${result}!`)
  user.isActive = true;
  computer.isActive = false;
  updateLog();
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

export { userTurn, newGame, battleLog };