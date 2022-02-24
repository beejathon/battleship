const createBoard = require('../factories/gameBoard.js')

describe("Gameboard factory:", () => {
  const board = createBoard();

  test("instantiates 10 x 10 board object", () => {
    board.placeShip(0, 2, 'horizontal', {length: 2, type: 'patrol boat'})

    expect(board.array.length).toBe(10)
    expect(board.array[0].length).toBe(10)
  })

  test("instantiates ship objects into fleet array", () => {
    expect(board.fleet[0].hits.length).toBe(2)
    expect(board.fleet[0].type).toBe('patrol boat')
  }) 

  test("places ship onto board horizontally", () => {
    expect(board.array[0][1].hasShip).toBe(false)
    expect(board.array[0][2].hasShip).toBe(true)
    expect(board.array[0][3].hasShip).toBe(true)
    expect(board.array[0][4].hasShip).toBe(false)
  })

  test("places ship onto board vertically", () => {
    board.placeShip(1, 0, 'vertical', {length: 3, type: 'submarine'})

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

    expect(board.array[1][0].isHit).toBe(true)
    expect(board.array[2][0].isHit).toBe(false)
    expect(board.array[3][0].isHit).toBe(false)
    expect(board.fleet[1].hits.length).toBe(2)
  })

  test("reports sunken fleet false", () => {
    expect(board.isFleetSunk()).toBe(false)
  })

  test("reports sunken fleet true", () => {
    board.receiveAttack(2, 0)
    board.receiveAttack(3, 0)
    board.receiveAttack(0, 2)
    board.receiveAttack(0, 3)

    expect(board.isFleetSunk()).toBe(true)
  })

  test("randomly populates board", () => {
    const randomBoard = createBoard();
    randomBoard.populateBoard();

    expect(randomBoard.fleet.length).toBe(5)
    expect(randomBoard.array).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({shipType: 'carrier'})
        ]),
        expect.arrayContaining([
          expect.objectContaining({shipType: 'battleship'}),
        ]),
        expect.arrayContaining([
          expect.objectContaining({shipType: 'submarine'}),
        ]),
        expect.arrayContaining([
          expect.objectContaining({shipType: 'destroyer'}),
        ]),
        expect.arrayContaining([
          expect.objectContaining({shipType: 'patrol boat'}),
        ]),
      ])
    )
  })

})  

