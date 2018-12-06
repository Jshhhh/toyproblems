/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these 
  //create array to hold results
  var results = [];
  var firstDigit = digitString[0];
  var digits = digitString.split('');
  //iterate through letters in first digit
  for (var i = 0; i < phoneDigitsToLetters[firstDigit].length; i++) {
  //digits.forEach(function(element, index) {
    //phoneDigitsToLetters[element].forEeach
    //})
    //for each letter in next digit
    for (var j = 0; j < phoneDigitsToLetters[digitString[1]].length; j++) {
      //add current letter to current string
      //for each letter in next 
      for (var k = 0; k < phoneDigitsToLetters[digitString[2]].length; k++) {
        //add current letter to string
        //for each letter in next digit 
        for (var l = 0; l < phoneDigitsToLetters[digitString[3]].length; l++) {
          //add letter to string
          let string = phoneDigitsToLetters[firstDigit][i] + phoneDigitsToLetters[digitString[1]][j] + phoneDigitsToLetters[digitString[2]][k] + phoneDigitsToLetters[digitString[3]][l]
          results.push(string);
        }
      }
    }
  }
  return results;
};










