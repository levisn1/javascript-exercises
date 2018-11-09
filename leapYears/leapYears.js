const leapYears = function(n) {
  if (n % 4 !== 0) {
    return false
  } else {
    if (n % 400 !== 0 && n % 100 === 0) {
      return false
    } else {
      return true
    }
  }
}

module.exports = leapYears



