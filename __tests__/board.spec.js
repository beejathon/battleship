const createBoard = require('../factories/boards.js')

describe("Gameboard factory:", () => {
  const board = createBoard();
  board.placeShip(0, 1, 'horizontal', 2)

  test("instantiates 10 x 10 board object", () => {
    expect(board.array.length).toBe(10)
    expect(board.array[0].length).toBe(10)
  })

  test("instantiates ship object into fleet array", () => {
    expect(board.fleet[0].hits).toEqual([1,2])
  }) 

  test("places ship onto board", () => {
    expect(board.array[0][1].hasShip).toBe(true)
    expect(board.array[0][2].hasShip).toBe(true)
  } )
})  

