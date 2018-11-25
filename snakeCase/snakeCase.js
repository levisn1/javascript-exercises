function snakeCase(str) {
  var onlyletters = str.replace(/[^a-zA-Z]/g,' ');
  var nodoublespaces = onlyletters.replace(/\s+/g,' ');
  var replacespaceswithunderscore = nodoublespaces.replace(/\s/g,'_');
  var removelastunderscore = replacespaceswithunderscore.replace(/_$/,'');
  var stringlowercased = removelastunderscore.toLowerCase();
  return stringlowercased;
}

module.exports = snakeCase

// function snakeCase(string) {
//   // wtf case
//   string = string.replace(/\.\./g, " ");

//   // this splits up camelcase IF there are no spaces in the word
//   if (string.indexOf(" ") < 0) {
//     string = string.replace(/([A-Z])/g, " $1");
//   }

//   return string
//     .trim()
//     .toLowerCase()
//     .replace(/[,\?\.]/g, "")
//     .replace(/\-/g, " ")
//     .split(" ")
//     .join("_");
// };
