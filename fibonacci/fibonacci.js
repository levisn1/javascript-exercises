function fibonacci(num) {
  if (num > 0) {
    var fibarray = [1,2,3]
    for (var i = 3; i < num; i++) {
      fibarray[i] = (fibarray[i-1] + fibarray[i-2])
    }
    return fibarray[num - 2]
  } else {
    return 'OOPS'
  }
}

module.exports = fibonacci
