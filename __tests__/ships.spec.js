const createShip = require('../factories/ships.js')

describe("Ship factory:", () => {
  const ship = createShip(2, 'Patrol Boat');
  
  test("instantiates ship object with length and type", () => {
    expect(ship.hits.length).toEqual(2);
    expect(ship.type).toBe('Patrol Boat');
  })

  test("records hits", () => {
    ship.hit(1);
    expect(ship.hits).toEqual([2]);
  })

  test("calculates sunk status", () => {
    ship.hit(1);
    ship.hit(2);
    ship.isSunk();
    expect(ship.sunk).toBe('sunk');
  })
})
