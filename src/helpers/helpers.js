const randomCoords = () => {
  let y = Math.floor(Math.random() * 10)
  let x = Math.floor(Math.random() * 10)

  return [y, x]
}

const convertStoI = (v) => {
  return parseInt(v);
}

export default randomCoords;
