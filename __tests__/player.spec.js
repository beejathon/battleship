const createPlayer = require('../factories/player.js');

describe("Player factory:", () => {
  const player1 = createPlayer('user');
  const player2 = createPlayer('computer');

  test("instantiates user and computer player objects", () => {
    expect(player1.type).toBe('user');
    expect(player2.type).toBe('computer');
  })

  test("instantiates user and computer gameboards", () => {
    expect(player1.board.array.length).toBe(10);
    expect(player2.board.array.length).toBe(10);
  })

  test("players can place ships onto own board", () => {
    player1.board.placeShip(0, 1, 'horizontal', 4, 'battleship');
    player2.board.placeShip(0, 1, 'vertical', 4, 'battleship');

    expect(player1.board.array[0][1].hasShip).toBe(true)
    expect(player1.board.array[0][2].hasShip).toBe(true)
    expect(player1.board.array[0][3].hasShip).toBe(true)
    expect(player1.board.array[0][4].hasShip).toBe(true)

    expect(player2.board.array[0][1].hasShip).toBe(true)
    expect(player2.board.array[1][1].hasShip).toBe(true)
    expect(player2.board.array[2][1].hasShip).toBe(true)
    expect(player2.board.array[3][1].hasShip).toBe(true)
  })

  test("players can attack each others boards", () => {
    player1
  })
})