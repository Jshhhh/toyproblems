/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, ...args) {
  let commonChar = '';
  //loop through string1
  // const args = [...args];
  for (let j = 0; j < string1.length; j++) {
    let common = true;
    args.forEach(elem => {
      if (elem.indexOf(string1[j]) === -1) {
        common = false;
      }
    });
    if (common && commonChar.indexOf(string1[j]) === -1) {
      commonChar += string1[j];
    }
  }
  return commonChar;
};

console.log(commonCharacters('acexivou', 'aegihobu', 'aeooi', 'aeiou'));