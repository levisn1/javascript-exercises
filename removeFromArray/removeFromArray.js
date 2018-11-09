const removeFromArray = function(arr, num) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

module.exports = removeFromArray
