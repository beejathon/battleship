import './styles.css';
import createPlayer from './factories/player.js';
import { init } from './display.js';
import { renderUserBoard } from './display.js';
import { renderComputerBoard } from './display.js';
import { updateLog } from './display.js'
import { resetBoards } from './display.js'
import { openModal } from './display.js'
import { closeModal } from './display.js'
import { renderStartBoard } from './display.js'

let user;
let computer;
let direction = 'horizontal';
let battleLog = [];
let shipsPlaced = 0;

const newGame = () => {
  resetGame();
  //create user player and prompt ship placement
  user = createPlayer('user')
  renderStartBoard(user);
  openModal();
}

const startGame = (input) => {
  closeModal();
  //change user name and set to active
  user.name = input;
  user.isActive = true;

  //create computer player and populate board
  computer = createPlayer('computer', getRandomName())
  computer.board.populateBoard()
  
  //render DOM boards
  renderUserBoard(user);
  renderComputerBoard(computer);
};

const resetGame = () => {
  user = undefined;
  computer = undefined;
  battleLog.splice(0, battleLog.length);
  direction = 'horizontal'
  shipsPlaced = 0;
  resetBoards();
}

const userTurn = (coords) => {
  let result = user.attack(computer.board, coords[0], coords[1])
  if (!result) {
    user.isActive = true;
    computer.isActive = false;
    nextTurn();
  } else {
    user.isActive = false;
    computer.isActive = true;
    battleLog.unshift(`${user.name}: ${result}!`)
    nextTurn();
  }
}

const computerTurn = () => {
  //generate random attack and store result
  let result = computer.randomAttack(user.board)
  battleLog.unshift(`${computer.name}: ${result}!`)
  user.isActive = true;
  computer.isActive = false;
  nextTurn();
}

const nextTurn = () => {
  //render DOM and check for win
  renderUserBoard(user);
  renderComputerBoard(computer);
  const gameOver = checkWin();
  updateLog(battleLog);
  if (gameOver) {
    let result = confirm('New Game?')
    if (result) newGame();
    else resetGame();
  }

  //check active user
  if (user.isActive) return;
  if (computer.isActive) computerTurn();
}

const checkWin = () => {
  if (user.board.isFleetSunk()) {
    battleLog.unshift(`${user.name} HAS LOST THE BATTLE OF SHIPS`)
    return true;
  }
  if (computer.board.isFleetSunk()) {
    battleLog.unshift(`${computer.name} HAS LOST THE BATTLE OF SHIPS`)
    return true;
  }
  return false;
}

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

const placeShips = (coords) => {
  const ships = [
    { length: 5, type: 'carrier' },
    { length: 4, type: 'battleship' },
    { length: 3, type: 'submarine' },
    { length: 3, type: 'destroyer' },
    { length: 2, type: 'patrol boat' },
  ]

  let index = shipsPlaced;
  let result = user.board.placeShip(coords[0], coords[1], direction, ships[index])

  if (result) {
    shipsPlaced++;
    renderStartBoard(user);
  }
}

const toggleDirection = () => {
  direction = (direction === 'vertical') ? 'horizontal' : 'vertical'
}

init();

export { 
  userTurn, 
  newGame,
  startGame, 
  toggleDirection, 
  placeShips,
  shipsPlaced
 };