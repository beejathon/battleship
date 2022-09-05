import { userTurn } from "./index.js";
import { newGame } from "./index.js";
import { startGame } from "./index.js";
import { toggleDirection } from "./index.js";
import { placeShips } from "./index.js";
import { direction } from "./index.js";
import { shipsPlaced } from "./index.js";

const init = () => {
  const newBtn = document.querySelector('#newGame');
  newBtn.addEventListener('click', newGame);
  newGame();
}

const renderUserBoard = (user) => {
  const userBoard = document.querySelector('#userBoard');
  userBoard.innerHTML = '';
  user.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      if (!element.isHit && !element.isMissed) {
        cell.classList.add('cell')
      }
      if (element.hasShip) {
        cell.classList.add('ship')
      }
      if (element.isHit) {
        cell.classList.add('hit')
        cell.innerHTML = '&#9673'
      }
      if (element.isMissed) {
        cell.classList.add('missed')
        cell.innerHTML = '&#9673'
      }
      cell.setAttribute('id', `${j}`)
      row.appendChild(cell)
    })
    userBoard.appendChild(row)
  })

  const userName = document.querySelector('#userName')
  userName.textContent = (user.isActive) ? `${user.name} is aiming...` : user.name;
 
}

const renderComputerBoard = (computer) => {
  const computerBoard = document.querySelector('#computerBoard');
  computerBoard.innerHTML = '';
  computer.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      if (!element.isHit && !element.isMissed) {
        cell.classList.add('cell')
      }
      if (element.isHit) {
        cell.classList.add('hit')
        cell.innerHTML = '&#9673'
      }
      if (element.isMissed) {
        cell.classList.add('missed')
        cell.innerHTML = '&#9673'
      }
      cell.classList.add('clickable')
      cell.setAttribute('id', `${j}`)
      cell.setAttribute('data-cell', `${i}-${j}`)
      row.appendChild(cell)
    })
    computerBoard.appendChild(row)
  })

  const computerName = document.querySelector('#computerName')
  computerName.textContent = (computer.isActive) ? `${computer.name} is aming...` : computer.name;

  if (!computer.isActive) {
    const cells = document.querySelectorAll('[data-cell]')
    cells.forEach((cell) => {
      cell.addEventListener('click', cellClick, false)
    })
  }
}

const resetDisplay = () => {
  const userBoard = document.querySelector('#userBoard')
  const userName = document. querySelector('#userName')
  const computerBoard = document.querySelector('#computerBoard')
  const computerName = document.querySelector('#computerName')
  const gameOver = document.querySelector('#gameOver');

  userBoard.innerHTML = ''
  userName.textContent = ''
  computerBoard.innerHTML = ''
  computerName.textContent = ''
  gameOver.innerHTML = ''
}

const openModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.classList.toggle('visible');
  const directionBtn = document.querySelector('#direction');
  directionBtn.addEventListener('click', toggleDirection);
  directionBtn.addEventListener('click', () => {
    directionBtn.textContent = (direction === 'horizontal') ? 'Horizontal' : 'Vertical';
  })
  const start = document.getElementById('startGame');
  start.addEventListener('submit', handleStart);
}

const closeModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.classList.toggle('visible'); 
}

const handleStart = (e) => {
  e.stopPropagation();
  e.preventDefault();
  const dataForm = new FormData(e.target)
  const name = dataForm.get('name')
  if (shipsPlaced === 5 && name != '') {
    startGame(name);
  }
}

const renderStartBoard = (user) => {
  const startBoard = document.querySelector('#startBoard')
  startBoard.innerHTML = '';
  user.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      cell.classList.add('placable')
      if (element.hasShip) {
        cell.classList.add('ship')
      }
      cell.setAttribute('id', `${j}`)
      cell.setAttribute('data-id', `${i}-${j}`)
      row.appendChild(cell)
    })
    startBoard.appendChild(row)
  })

  const cells = document.querySelectorAll('[data-id]');
  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', hoverOn)
    cell.addEventListener('mouseleave', hoverOff)
    cell.addEventListener('click', handlePlacement, false)
  })
}

const hoverOn = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = parseInt(target.id);
  let y = parseInt(target.parentElement.id);
  let length;

  switch (shipsPlaced) {
    case 0:
      length = 5;
      break;
    case 1:
      length = 4;
      break;
    case 2:
      length = 3;
      break;
    case 3:
      length = 3;
      break;
    case 4:
      length = 2;
      break;
  }

  if (direction === 'horizontal') {
    for (let i = x; i < x + length; i++) {
      let cell = document.querySelector(`[data-id="${y}-${i}"]`);
      if (cell === null) return;
      cell.classList.add('target-zone');
    }
  }
  
  if (direction === 'vertical') {
    for (let i = y; i < y + length; i++) {
      let cell = document.querySelector(`[data-id="${i}-${x}"]`);
      if (cell === null) return;
      cell.classList.add('target-zone');
    }
  }
}

const hoverOff = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = parseInt(target.id);
  let y = parseInt(target.parentElement.id);
  let length;

  switch (shipsPlaced) {
    case 0:
      length = 5;
      break;
    case 1:
      length = 4;
      break;
    case 2:
      length = 3;
      break;
    case 3:
      length = 3;
      break;
    case 4:
      length = 2;
      break;
  }

  if (direction === 'horizontal') {
    for (let i = x; i < x + length; i++) {
      let cell = document.querySelector(`[data-id="${y}-${i}"]`);
      if (cell === null) return;
      cell.classList.remove('target-zone');
    }
  }
  
  if (direction === 'vertical') {
    for (let i = y; i < y + length; i++) {
      let cell = document.querySelector(`[data-id="${i}-${x}"]`);
      if (cell === null) return;
      cell.classList.remove('target-zone');
    }
  }
}

const handlePlacement = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (shipsPlaced === 5) return;

  let target = e.target;
  let x = parseInt(target.id); 
  let y = parseInt(target.parentElement.id);

  placeShips([y, x])
}

const cellClick = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = parseInt(target.id); 
  let y = parseInt(target.parentElement.id);
  userTurn([y, x]);
}

const updateLog = (battleLog) => {
  let ul = document.querySelector('.battle-log ul');
  ul.innerHTML = '';
  let df = document.createDocumentFragment();
  battleLog.forEach((entry) => {
    let li = document.createElement('li');
    li.innerText = entry;
    df.appendChild(li);
  })
  ul.appendChild(df);
}

const displayGameOver = () => {
  const gameOver = document.querySelector('#gameOver');
  gameOver.innerHTML = `
  <iframe src="https://giphy.com/embed/5xzjWHwBea0LK" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  <p>
    <a href="https://giphy.com/gifs/5xzjWHwBea0LK">via GIPHY</a>
  </p>
  `
}

export { 
  renderUserBoard, 
  renderComputerBoard,
  resetDisplay, 
  updateLog,
  openModal,
  closeModal,
  renderStartBoard,
  displayGameOver,
  init 
};