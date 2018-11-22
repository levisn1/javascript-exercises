function add() {
	var arr = [...arguments];
  var sum = arr.reduce(function(total, num) {
    return total + num;
  }, 0);
  return sum;
}

function subtract (a,b) {
  if (a > b) {
    return a - b
  } else {
    b - a
  }
}

function sum(array) {
  var arr = array;
  var sum = arr.reduce(function(total, num) {
    return total + num;
  }, 0);
  return sum;
}

function multiply(array) {
  var arr = array;
  var multi = arr.reduce(function(total, num) {
    return total * num
  });
  return multi
}

function power(a,b) {
return Math.pow(a, b);
}

function factorial(num) {
  if (num === 0) {
    return 1
  } else {
    var sum = [];
    for (var i = 1; i <= num ; i++) {
      sum.push(i)
    }
    var multiply = sum.reduce(function(total, num){
      return total * num;
    })
    return multiply;
  }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
