
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
if (typeof romanNumeral === 'string') {
  if (!romanNumeral) {
    return 0;
  }
  //iterate through romanNumeral reverse
  var total = DIGIT_VALUES[romanNumeral[romanNumeral.length - 1]];
  for (var i = romanNumeral.length - 2; i >= 0; i--) {
    //if current numeral is equal or larger than previous
    let currentNumeral = DIGIT_VALUES[romanNumeral[i]];
    let prevNumeral = DIGIT_VALUES[romanNumeral[i + 1]];
    if (currentNumeral >= prevNumeral) {
      //add value to total
      total += currentNumeral;
    } else {
      //subtract from total
      total -= currentNumeral;
    }
  }
  return total;
}
return null;
};
