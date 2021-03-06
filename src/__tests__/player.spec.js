import createPlayer from '../factories/player.js';

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
    player1.board.placeShip(0, 1, 'horizontal', {length: 3, type: 'submarine'});
    player2.board.placeShip(1, 1, 'vertical', {length: 3, type: 'destroyer'});

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
    const result1 = player1.board.placeShip(0, 7, 'horizontal', {length: 4, type: 'battleship'});
    const result2 = player2.board.placeShip(7, 0, 'vertical', {length: 4, type: 'battleship'});

    expect(result1).toBe(false)
    expect(result2).toBe(false)
  })

  test("players cannot place overlapping ships", () => {
    player1.board.placeShip(0, 0, 'horizontal', {length: 5, type: 'carrier'});
    player2.board.placeShip(0, 1, 'vertical', {length: 5, type: 'carrier'});

    expect(player1.board.fleet.length).toBe(1)
    expect(player2.board.fleet.length).toBe(1)
  })

  test("players can attack each others ships", () => {
    player1.attack(player2.board, 1, 1);
    player2.attack(player1.board, 0, 0);

    expect(player1.board.array[0][0].isMissed).toBe(true)
    expect(player1.board.fleet[0].hits.length).toBe(3)

    expect(player2.board.array[1][1].isHit).toBe(true)
    expect(player2.board.fleet[0].hits.length).toBe(2)
  })

  test("computer player generates random legal attacks", () => {
    const human = createPlayer('user', 'Philippe');
    const computer = createPlayer('computer', 'Lie Bot');
    computer.randomAttack(human.board);

    expect(human.board.array).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({isMissed: true})
        ])
      ])
    )
  })

  test("players cannot make repeat moves", () => {
    const human = createPlayer('user', 'Philippe');
    const computer = createPlayer('computer', 'Lie Bot');
    computer.attack(human.board, 1, 1);
    computer.attack(human.board, 1, 1);

    expect(computer.moves.length).toBe(1)
  })

})