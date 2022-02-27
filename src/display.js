import userTurn from "./index.js";

const renderBoard = (players) => {
  //render boards
  const userBoard = document.querySelector('#userBoard');
  const computerBoard = document.querySelector('#computerBoard');

  players[0].board.array.forEach((element, i) => {
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

  players[1].board.array.forEach((element, i) => {
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

  // render player names
  const userName = document.querySelector('#userName')
  userName.textContent = players[0].name;
  const computerName = document.querySelector('#computerName')
  computerName.textContent = players[1].name;
}

const addListeners = () => {
  const computerBoard = document.querySelector('#computerBoard')
  computerBoard.addEventListener('click', cellClick, false)
}

const cellClick = (e) => {
  e.preventDefault();
  e.stopPropagation();

  console.log(e.target)

  //get coordinates
  let target = e.target;
  let x = target.id; 
  let y = target.parentElement.id;

  console.log(y, x)

  userTurn([y, x]);
}

export { renderBoard, addListeners };