const sumAll = function(a, b) {
  var foo = [];
  sum = 0;
  if ((typeof a === 'string' || typeof b === 'string') || (a < 0 || b < 0) || (typeof a !== 'number' || typeof b !== 'number')) {
    return 'ERROR'
  } else {
    if (a < b) {
      for (var i = a; i <= b; i++) {
        foo.push(i);
      }
    } else {
      for (var i = b; i <= a; i++) {
        foo.push(i);
      }};
      return foo.reduce(function(a, b) {
        return a + b;
      });
    }
  }

module.exports = sumAll
