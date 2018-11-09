const ftoc = function(t) {
  let temp = (t - 32) * 5/9;
  return Math.round(temp * 10) / 10;
}

const ctof = function(t) {
  let temp = (t * 9/5) + 32;
  return Math.round(temp * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
