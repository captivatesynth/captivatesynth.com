export default function randoCirclesSvg(width, height) {
  const qty = 50
  const circles = new Array(qty).fill(0)

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    ${circles.map((_) => {
      const x = random(100)
      const y = random(100)
      const r = randomSkewed(2, 3)
      return circle(x, y, r)
    })}
  </svg>`
}

function circle(x, y, r) {
  return `<circle cx="${x}%" cy="${y}%" r="${r}%" fill="white" fill-opacity="${random(
    1
  )}"/>`
}

function random(max) {
  return Math.random() * max
}

function randomSkewed(max, skew) {
  return Math.random() ** skew * max
}

function randomRanged(min, max) {
  const range = max - min
  return min + Math.random() * range
}

// function lerp(start, end, amount) {
//   const range = end - start
//   return start + range * amount
// }
