const repeatString = function(string, num) {
  if (num > 1) {
    return string.repeat(num);
  } else if (num === 0) {
    return '';
  } else if (num < 0) {
    return 'ERROR';
  } else {
    return string;
  }
}

module.exports = repeatString
