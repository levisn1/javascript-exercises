function palindromes(str) {
  var strnospace = str.replace(/ /g,'').split('.').join('').toLowerCase();
  var strfiltered = strnospace.slice().split('').filter(letter => /^[A-Za-z.\s_-]$/.test(letter)).join('');
  var strreversed = strfiltered.slice().split('').reverse().join('');
  return strfiltered === strreversed;
}

module.exports = palindromes
