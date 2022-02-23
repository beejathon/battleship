const randomCoords = function() {
  let y = Math.floor(Math.random() * 10)
  let x = Math.floor(Math.random() * 10)

  return [y, x]
}

const randomDirection = function() {
  let value = Math.floor(Math.random() * 1);
  let direction = (value == 0) ? 'horizontal' : 'vertical';

  return direction;
}

module.exports = randomCoords, randomDirection;
