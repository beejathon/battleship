import './styles.css';
import createPlayer from './factories/player.js';
import renderBoard from './display.js'

let user;
let computer;
const players = []

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
  players.splice(0, players.length)

  //create players and populate boards
  let user = createPlayer('user', input)
  let computer = createPlayer('computer', getRandomName())
  computer.board.populateBoard()
  user.board.populateBoard()

  //set user to active
  user.isActive = true;

  //render DOM board
  players.push(user, computer)
  renderBoard(players);
};

function userTurn (e) {
  e.preventDefault();
  e.stopPropagation();

  //get coordinates
  let target = e.target;
  let x = target.id; 
  let y = target.parentElement.id;

  //attack opponent
  let result = players[0].attack(players[1].board, y, x)

  if (result) {
    players[0].isActive = true;
    players[1].isActive = false;
  } else {
    players[0].isActive = true;
    players[1].isActive = false;
  }

  nextTurn();
}

const computerTurn = () => {
  //generate random attack and store result
  let result = players[1].randomAttack(players[0].board)

  //continue random attacks until miss
  while (result) {
    result = players[1].randomAttack(players[0].board)
  }

  players[0].isActive = true;
  players[1].isActive = false;

  nextTurn();
}

const nextTurn = () => {
  //check for win
  const gameOver = checkWin();
  if (gameOver) newGame('CORNHOLIO');

  //check active user
  if (players[0].isActive) userTurn() 
  if (players[1].isActive) computerTurn();
}

const checkWin = () => {
  players.forEach((player) => {
    if (player.board.isFleetSunk()) {
      alert(`${player.name} wins`);
      return true;
    }
  })

  return false;
}

const userInput = (e) => {


  return [y, x];
}

newGame('bungholio');
playTurn();

export default { newGame, playTurn }
