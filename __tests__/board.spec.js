const createBoard = require('../factories/boards.js')

describe("Gameboard factory:", () => {
  const board = createBoard();

  test("instantiates 10 x 10 board object", () => {
    board.placeShip(0, 2, 'horizontal', 2, 'patrol')

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
    board.placeShip(1, 0, 'vertical', 3, 'submarine')

    expect(board.array[0][0].hasShip).toBe(false)
    expect(board.array[1][0].hasShip).toBe(true)
    expect(board.array[2][0].hasShip).toBe(true)
    expect(board.array[3][0].hasShip).toBe(true)
    expect(board.array[4][0].hasShip).toBe(false)
  })

  test("receives attack and records miss", () => {
    board.receiveAttack(0, 0)

    expect(board.array[0][0].isMissed).toBe(true)
    expect(board.array[0][1].isHit).toBe(false)
    expect(board.array[1][1].isHit).toBe(false)
    expect(board.log).toContain('miss 0,0')
  })


  test("receives attack and board records hit", () => {
    board.receiveAttack(1, 0)

    expect(board.array[0][0].isHit).toBe(false)
    expect(board.array[1][0].isHit).toBe(true)
    expect(board.array[2][0].isHit).toBe(false)
  })

  test("receives attack and ship object in fleet array records hit", () => {
    expect(board.fleet[1].hits).toEqual([1,2])
  })

  test("reports sunken fleet false", () => {
    expect(board.isFleetSunk()).toBe(false)
  })

  test("reports sunken fleet true", () => {
    board.receiveAttack(1,0)
    board.receiveAttack(2,0)
    board.receiveAttack(3,0)
    board.receiveAttack(0,2)
    board.receiveAttack(0,3)

    expect(board.isFleetSunk()).toBe(true)
  })

})  

