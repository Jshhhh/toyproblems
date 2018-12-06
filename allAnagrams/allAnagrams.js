/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */						  // 123,   132,   213,   231,   312,   321

var allAnagrams = function(string) {
	//split string by each letter
	var results = [];
	//array to hold results
	//loop through indexes
	for (var i = 0; i < string.length; i++) {
	//iterate through indexes of string
		let forwardStr = string[i];
		let reverseStr = string[i];
	  	for (var j = 0; j < string.length; j++) {
		  	//if current index does not equal starting
		  	if (i !== j) {
		  	//add current char to holder string
		  		forwardStr += string[j];
		  	}
	  	}
	  	results.push(forwardStr);
		//iterate revers through index
	  	for (var l = string.length - 1; l >= 0; l--) {
		  	//if current i does not equal starting
	  		if (l !== i) {
		  	//add current char to holder string
	  			reverseStr = string[l] + reverseStr;
	  		}
  		}
	  	//push string into 
	  	results.push(reverseStr);
	}
	return results;
};

/* 	a - b - c
		c - b
	b - a - c
		c - a
	c - a - b
		b - a
*/
