/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  //parses this to a string
  //if this is less than equal to 20
    //return string of numbersToWords[this]
  //if greater than and less than 100
    //take the first digit and multiply by 10 and length of string - 1
    //then get remainder from current value 
    //return string of numberToWords[tens] plus hyphen plus numberToWords[ones]
  let numString = this.toString().split('');
  let numEnglish = '';
  if (numString.length > 1) {
    numString[0] += '0';
  }
  if (this < 20) {
    numEnglish += numbersToWords[this];
  }
  if (this > 20 && this < 100) {
    numEnglish = numbersToWords[numString[0]] + '-' + numbersToWords[numString[1]];
  }
  if (this >= 100) {
    //check if modulo of number and numbersToPlace is less than number
      //
  }
  return numEnglish;
};











