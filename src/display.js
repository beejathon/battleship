import { userTurn } from "./index.js";
import { newGame } from "./index.js";
import { startGame } from "./index.js";
import { toggleDirection } from "./index.js";
import { placeShips } from "./index.js";
import { shipsPlaced } from "./index.js";

const init = () => {
  const newBtn = document.querySelector('#newGame')
  newBtn.addEventListener('click', newGame)
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
  userName.textContent = user.name;
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
      row.appendChild(cell)
    })
    computerBoard.appendChild(row)
  })

  const computerName = document.querySelector('#computerName')
  computerName.textContent = computer.name;

  computerBoard.addEventListener('click', cellClick, false)
}

const resetBoards = () => {
  const userBoard = document.querySelector('#userBoard')
  const userName = document. querySelector('#userName')
  const computerBoard = document.querySelector('#computerBoard')
  const computerName = document.querySelector('#computerName')

  userBoard.innerHTML = ''
  userName.textContent = ''
  computerBoard.innerHTML = ''
  computerName.textContent = ''
}

const openModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.classList.toggle('visible');
  const direction = document.querySelector('#direction');
  direction.addEventListener('click', toggleDirection);
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
  if (shipsPlaced === 5) {
    startGame(name);
  }
  console.log(shipsPlaced)
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
      row.appendChild(cell)
    })
    startBoard.appendChild(row)
  })

  startBoard.addEventListener('click', handlePlacement, false)
}

const handlePlacement = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = target.id; 
  let y = target.parentElement.id;

  placeShips([y, x])
}

const cellClick = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = target.id; 
  let y = target.parentElement.id;
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

export { 
  renderUserBoard, 
  renderComputerBoard,
  resetBoards, 
  updateLog,
  openModal,
  closeModal,
  renderStartBoard,
  init 
};