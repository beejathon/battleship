import userTurn from "./index.js";

const renderUserBoard = (user) => {
  const userBoard = document.querySelector('#userBoard');
  user.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      if (element.hasShip) {
        cell.classList.add('cell')
        cell.classList.add('ship')
      }
      if (!element.hasShip) {
        cell.classList.add('cell')
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
  computer.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      if (element.hasShip) {
        cell.classList.add('ship')
      }
      if (!element.hasShip) {
        cell.classList.add('cell')
      }
      cell.classList.add('clickable')
      cell.setAttribute('id', `${j}`)
      row.appendChild(cell)
    })
    computerBoard.appendChild(row)
  })

  const computerName = document.querySelector('#computerName')
  computerName.textContent = computer.name;
}

const addListeners = () => {
  const computerBoard = document.querySelector('#computerBoard')
  computerBoard.addEventListener('click', cellClick, false)
}

const cellClick = (e) => {
  e.preventDefault();
  e.stopPropagation();

  //get coordinates
  let target = e.target;
  let x = target.id; 
  let y = target.parentElement.id;

  console.log(y, x)

  userTurn([y, x]);
}

export { renderUserBoard, renderComputerBoard, addListeners };