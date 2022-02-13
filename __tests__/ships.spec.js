const createShip = require('../factories/ships.js')

describe("Ship factory:", () => {
  const ship2 = createShip(2);
  
  test("instantiates ship object with length", () => {
    expect(ship2.hits).toEqual([1,2]);
  })

  test("records hits", () => {
    ship2.hit(1);
    expect(ship2.hits).toEqual([2]);
  })

  test("calculates sunk status", () => {
    ship2.hit(1);
    ship2.hit(2);
    ship2.isSunk();
    expect(ship2.sunk).toBe('sunk');
  })
})
