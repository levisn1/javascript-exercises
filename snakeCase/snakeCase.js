function snakeCase(str) {
  var onlyletters = str.replace(/[^a-zA-Z]/g,' ');
  var nodoublespaces = onlyletters.replace(/\s+/g,' ');
  var replacespaceswithunderscore = nodoublespaces.replace(/\s/g,'_');
  var removelastunderscore = replacespaceswithunderscore.replace(/_$/,'');
  var stringlowercased = removelastunderscore.toLowerCase();
  return stringlowercased;
}

module.exports = snakeCase


// describe('snakeCase', function() {
//   it('works with simple lowercased phrases', function() {
//     expect(snakeCase('hello world')).toEqual('hello_world');
//   });
//   xit('works with Caps and punctuation', function() {
//     expect(snakeCase('Hello, World???')).toEqual('hello_world');
//   });
//   xit('works with longer phrases', function() {
//     expect(snakeCase('This is the song that never ends....')).toEqual('this_is_the_song_that_never_ends');
//   });
//   xit('works with camel case', function() {
//     expect(snakeCase('snakeCase')).toEqual('snake_case');
//   });
//   xit('works with kebab case', function() {
//     expect(snakeCase('snake-case')).toEqual('snake_case');
//   });
//   xit('works with WTF case', function() {
//     expect(snakeCase('SnAkE..CaSe..Is..AwEsOmE')).toEqual('snake_case_is_awesome');
//   });

// });



// function test(str) {
//   var arrayata = str.split('');
//   var filtered = arrayata.filter(letter => /^[A-Za-z.\s_-]$/.test(letter));
//   var newfil = filtered.slice()
//   console.log(filtered)
// }


// trasformo la frase in un array
// filtra la punteggiatura dall'array


// function palindromes(str) {
//   var strnospace = str.replace(/ /g,'').split('.').join('').toLowerCase();
//   var strfiltered = strnospace.slice().split('').filter(letter => /^[A-Za-z.\s_-]$/.test(letter)).join('');
//   var strreversed = strfiltered.slice().split('').reverse().join('');
//   return strfiltered === strreversed;
// }

// function testt(str) {
//   var ll = str.split('.');
//   console.log(ll)
// }

// function replacer(str) {
//   var x = str.replace(/[^a-zA-Z]/g,'.');
//   console.log(x)
//   var xx = x.slice().replace(/\./g,' ');
//   console.log(xx)
//   var xxx = xx.slice().replace(/\s/g,' ');
//   console.log(xxx)
//   var xxxx = xxx.slice().replace(/\s/g,'_');
//   console.log(xxxx)
// }




// function replacer(str) {
//   var x = str.replace(/\./g,' ');
//   console.log(x)
// }

// SnAkE CaSeIs  AwEsOmE RighT

// function replacer(str) {
//   var x = str.replace(/\s\s/g,' ')
//   console.log(x);
// }

//SnAkE CaSeIs AwEsOmE RighT


// SnAkE-CaSeIs..AwEsOmE,RighT???


// SnAkE.CaSeIs..AwEsOmE.RighT...

// S n A k E  C a S e I s  A w E s O m E  R i g h T
