const createBoard = require('../factories/boards.js')

describe("Gameboard factory:", () => {
  const board = createBoard();

  test("instantiates 10 x 10 board object", () => {
    expect(board.array.length).toBe(10)
    expect(board.array[0].length).toBe(10)
  })

  test("instantiates ship object into fleet array", () => {
    board.placeShip(0, 1, 'horizontal', 2)

    expect(board.fleet[0].hits).toEqual([1,2])
  }) 

  test("places ship onto board horizontally", () => {
    board.placeShip(0, 1, 'horizontal', 2)

    expect(board.array[0][0].hasShip).toBe(false)
    expect(board.array[0][1].hasShip).toBe(true)
    expect(board.array[0][2].hasShip).toBe(true)
    expect(board.array[0][3].hasShip).toBe(false)
    expect(board.array[1][0].hasShip).toBe(false)
  })

  test("places ship onto board vertically", () => {
    board.placeShip(0, 1, 'vertical', 2)

    expect(board.array[0][0].hasShip).toBe(false)
    expect(board.array[0][1].hasShip).toBe(true)
    expect(board.array[1][1].hasShip).toBe(true)
    expect(board.array[1][2].hasShip).toBe(false)
    expect(board.array[1][0].hasShip).toBe(false)
  })

  test("receives attack and records hit", () => {
    board.placeShip(0, 1, 'vertical', 2)
    board.receiveAttack(0, 1)

    expect(board.array[0][0].isHit).toBe(false)
    expect(board.array[0][1].isHit).toBe(true)
    expect(board.array[1][1].isHit).toBe(false)
  })

  test("receives attack and records miss", () => {
    board.placeShip(0, 1, 'vertical', 2)
    board.receiveAttack(0, 0)

    expect(board.array[0][0].isMissed).toBe(true)
    expect(board.array[0][1].isHit).toBe(false)
    expect(board.array[1][1].isHit).toBe(false)
  })

})  

