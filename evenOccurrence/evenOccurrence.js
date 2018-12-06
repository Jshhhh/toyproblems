/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

//for every value of array
	//loop through array to compare
		//increment value count
//if value count is divisible by 2
	//return value

//Dont want to reiterate over elements that have already been checked

// var evenOccurrence = function(arr) {
// 	let sortArr = arr.sort(function(a, b) {return a - b});
// 	for(var i = 0; i < sortArr.length; i++) {
// 	  	let count = 1;
// 	  	for (var j = i + 1; j < sortArr.length; j++) {
// 	  		if (arr[i] === arr[j]) {
// 	  			count++;
// 	  		}
// 	  	}
// 	  	if (count % 2 === 0) {
// 	  		return arr[i];
// 	  	}
// 	}
// 	return null;
// };

var evenOccurrence = function(arr) {
	let occurrences = {};
	for (var i = 0; i < arr.length; i++) {
		if (occurrences[arr[i]]) {
			occurrences[arr[i]]++;
		} else {
			occurrences[arr[i]] = 1
		}
	}
	for (var i = 0; i < arr.length; i++) {
		if (occurrences[arr[i]] % 2 === 0) {
			return arr[i];
		}
	}
	return null;
}

