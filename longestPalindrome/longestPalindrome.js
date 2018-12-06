/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/


//input: string
//output: part of string that is longest palindrome
var longestPalindrome = function (string) {
	//let obj hold palindrome length as key and palindrome as value
	let palindromes = {};
	//start iteration through string at index 1
	for (var i = 1; i < string.length; i++) {
		//let palindrome = '';
		var currentPal = '';
		//iterate through neighbors
		for (var j = 1; j < string.length; j++) {
			//if they match then continue
			console.log(string[i - j], string[i + j]);
			if (string[i - j] === string[i + j]) {
				//add matching chars to palindrome
				currentPal = string.slice(i - j, i + j + 1);
			} else {
				break;
			}
		}
		//set obj[palindrome.length] = palindrome
		console.log(currentPal); 
		palindromes[currentPal.length] = currentPal;
	}
	return palindromes[Math.max(...Object.keys(palindromes))];
};
