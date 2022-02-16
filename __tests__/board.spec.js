const createBoard = require('../factories/boards.js')

describe("Gameboard factory:", () => {
  const board = createBoard();
  board.placeShip(0, 2, 'horizontal', 2, 'patrol')
  board.placeShip(1, 0, 'vertical', 3, 'submarine')

  test("instantiates 10 x 10 board object", () => {
    expect(board.array.length).toBe(10)
    expect(board.array[0].length).toBe(10)
  })

  test("instantiates ship object into fleet array", () => {
    expect(board.fleet[0].hits).toEqual([1,2])
    expect(board.fleet[0].type).toBe('patrol')
  }) 

  test("places ship onto board horizontally", () => {
    expect(board.array[0][1].hasShip).toBe(false)
    expect(board.array[0][2].hasShip).toBe(true)
    expect(board.array[0][3].hasShip).toBe(true)
    expect(board.array[0][4].hasShip).toBe(false)
  })

  test("places ship onto board vertically", () => {

    expect(board.array[0][0].hasShip).toBe(false)
    expect(board.array[1][0].hasShip).toBe(true)
    expect(board.array[2][0].hasShip).toBe(true)
    expect(board.array[3][0].hasShip).toBe(true)
    expect(board.array[4][0].hasShip).toBe(false)
  })

  board.receiveAttack(0, 0)
  test("receives attack and records miss", () => {
    expect(board.array[0][0].isMissed).toBe(true)
    expect(board.array[0][1].isHit).toBe(false)
    expect(board.array[1][1].isHit).toBe(false)
  })

  board.receiveAttack(1, 0)
  test("receives attack and records hit", () => {
    expect(board.array[0][0].isHit).toBe(false)
    expect(board.array[1][0].isHit).toBe(true)
    expect(board.array[2][0].isHit).toBe(false)
  })

  test("ship object in fleet array records hit", () => {
    expect(board.fleet[1].hits).toEqual([1,2])
  })

})  

