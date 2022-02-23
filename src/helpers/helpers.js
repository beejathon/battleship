const randomCoords = function() {
  let y = Math.floor(Math.random() * 10)
  let x = Math.floor(Math.random() * 10)

  return [y, x]
}

const randomDirection = function() {
  let direction = Math.floor(Math.random() * 2) === 1 ? 'horizontal' : 'vertical';

  return direction;
}

module.exports = randomCoords, randomDirection;
