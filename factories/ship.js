const createShip = (length, type) => {
  const ship = {}
  ship.hits = [];
  ship.status = 'afloat'
  ship.type = type;

  for (let i = 1; i <= length; i++) {
    ship.hits.push(i);
  }

  ship.hit = function() {
    this.hits.pop();
  }

  ship.isSunk = function() {
    this.hits.length === 0 ? this.status = 'sunk' : this.status = 'afloat';
  }

  return ship;

};

module.exports = createShip;
