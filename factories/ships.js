const createShip = (length) => {
  const ship = {}
  ship.hits = [];
  ship.sunk = 'afloat'

  for (let i = 1; i <= length; i++) {
    ship.hits.push(i);
  }

  ship.hit = function(number) {
    this.hits = this.hits.filter((element) => element != number);
  }

  ship.isSunk = function() {
    this.hits.length === 0 ? this.sunk = 'sunk' : this.sunk = 'afloat';
  }

  return ship;

};

module.exports = createShip;
