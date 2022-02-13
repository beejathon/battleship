const createBoard = require('../factories/boards.js')

describe("Gameboard factory:", () => {
  const board = createBoard();

  test("instantiates 10 x 10 board object", () => {
    expect(board.length).toBe(10)
    expect(board[0].length.tobe(10))
  })
})  

