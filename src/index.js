import './styles.css';
import createPlayer from './factories/player.js';
import { renderUserBoard } from './display.js';
import { renderComputerBoard } from './display.js';
import { updateLog } from './display.js'
import { resetBoards } from './display.js'

let user;
let computer;
let direction = 'vertical';
let battleLog = [];


const newGame = (input) => {
  //create user player and prompt ship placement
  user = createPlayer('user', input)
  user.board.populateBoard()
  
  //create computer player and populate board
  computer = createPlayer('computer', getRandomName())
  computer.board.populateBoard()

  //set user to active
  user.isActive = true;

  //reset battle log
  battleLog.splice(0, battleLog.length);

  //render DOM board
  renderUserBoard(user);
  renderComputerBoard(computer);
};

const resetGame = () => {
  user = undefined;
  computer = undefined;
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

const getPlacement = (coords, direction, index) => {
  const ships = [
    { length: 5, type: 'carrier' },
    { length: 4, type: 'battleship' },
    { length: 3, type: 'submarine' },
    { length: 3, type: 'destroyer' },
    { length: 2, type: 'patrol boat' },
  ]

  user.board.placeShip(coords[0], coords[1], direction, ships[index])
}

const toggleDirection = () => {
  direction = (direction === 'vertical') ? 'horizontal' : 'vertical'
}

let game = newGame('bungholio');

export { userTurn, newGame, toggleDirection, getPlacement };