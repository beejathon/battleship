const createPlayer = require("./factories/player.js");
const randomCoords = require("./helpers/helpers.js");
const randomDirection = require("./helpers/helpers.js");

const GAME_PIECES = [
  { length: 5, type: 'carrier' },
  { length: 4, type: 'battleship' },
  { length: 3, type: 'submarine' },
  { length: 3, type: 'destroyer' },
  { length: 2, type: 'patrol boat' }
]

let players = [];

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
  //clear players array
  players.splice(0, players.length)

  //create players and boards
  let computer = createPlayer('computer', getRandomName())
  let user = createPlayer('user', input)

  //radomly populate boards
  placeShipsRandomly(computer);
  placeShipsRandomly(user);

  //push player objects to players array
  players.push(user, computer)
}

const placeShipsRandomly = function(player) {
  let coords = randomCoords();
  let direction = randomDirection();

  for (const ship in GAME_PIECES) {
    //check if placement obeys board rules
    let placementIsValid = player.board.isPlacementValid(
      coords[0], 
      coords[1], 
      ship.length
      );
    let spaceIsClear = player.board.isSpaceClear(
      coords[0], 
      coords[1], 
      direction, 
      ship.length
      );
  
    //generate new random placement if coordinates are invalid
    while (!placementIsValid && !spaceIsClear) {
      coords = randomCoords();
      direction = randomDirection();
    }

    //place ship onto player board
    player.board.placeShip(
      coords[0], 
      coords[1], 
      randomDirection(), 
      ship.length, 
      ship.type);
  }
}

newGame();