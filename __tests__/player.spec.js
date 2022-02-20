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
    player1.board.placeShip(0, 1, 'horizontal', 3, 'submarine');
    player2.board.placeShip(1, 1, 'vertical', 3, 'cruiser');

    expect(player1.board.array[0][1].hasShip).toBe(true)
    expect(player1.board.array[0][2].hasShip).toBe(true)
    expect(player1.board.array[0][3].hasShip).toBe(true)
    expect(player1.board.array[0][4].hasShip).toBe(false)

    expect(player2.board.array[1][1].hasShip).toBe(true)
    expect(player2.board.array[2][1].hasShip).toBe(true)
    expect(player2.board.array[3][1].hasShip).toBe(true)
    expect(player2.board.array[4][1].hasShip).toBe(false)
  })

  test("players cannot place ships outside of board", () => {
    player1.board.placeShip(-1, 10, 'horizontal', 2, 'patrol');
    player2.board.placeShip(10, -1, 'vertical', 2, 'patrol');
    player1.board.placeShip(0, 7, 'horizontal', 4, 'battleship');
    player2.board.placeShip(7, 0, 'vertical', 4, 'battleship');

    expect(player1.board.fleet.length).toBe(1)
    expect(player2.board.fleet.length).toBe(1)

  })

  test("players cannot place overlapping ships", () => {
    player1.board.placeShip(0, 0, 'horizontal', 5, 'carrier');
    player2.board.placeShip(0, 1, 'vertical', 5, 'carrier');

    expect(player1.board.fleet.length).toBe(1)
    expect(player2.board.fleet.length).toBe(1)
  })

  test("players can attack each others ships", () => {
    player1.board.receiveAttack(0, 0);
    player2.board.receiveAttack(1, 1);

    expect(player1.board.array[0][0].isMissed).toBe(true)
    expect(player1.board.fleet[0].hits.length).toBe(3)

    expect(player2.board.array[1][1].isHit).toBe(true)
    expect(player2.board.fleet[0].hits.length).toBe(2)
  })

  test("check array", () => {
    expect(player1.board.array).toBe(1)
    expect(player2.board.array).toBe(1)
  })

})