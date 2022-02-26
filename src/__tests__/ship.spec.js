import createShip from '../factories/ship.js';

describe("Ship factory:", () => {
  const ship = createShip(2, 'Patrol Boat');
  
  test("instantiates ship object with length and type", () => {
    expect(ship.hits.length).toBe(2);
    expect(ship.type).toBe('Patrol Boat');
  })

  test("records hits", () => {
    ship.hit();
    expect(ship.hits.length).toBe(1);
  })

  test("calculates sunk status", () => {
    ship.hit(1);
    ship.hit(2);
    ship.isSunk();
    expect(ship.status).toBe('sunk');
  })
})
