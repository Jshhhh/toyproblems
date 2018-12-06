/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  const subStr = str.split('');
  const set = ['', ...subStr, str];
  function searchSub(letter, index) {
    for (let i = index; i < subStr.length; i++) {
      let currLetter = letter;
      if (letter !== subStr[i]) {
        currLetter += subStr[i];
        set.push(currLetter);
      }
    }
  }
  for (let j = 0; j < str.length; j++) {
    searchSub(str[j], j);
  }
  return set;
};
console.log(JSON.stringify(powerSet('jump')));