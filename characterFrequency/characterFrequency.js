/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */
//create result array
//sort string alphabetically
//helper loop function
	//let first element in holder array equal to current char
	//find count of char by subtracting last index by first index
	//push count to holder
	//push holder to result
	//if last index of current char does not equal to length of string
		//recurse with starting point of last index of current char + 1;


var characterFrequency = function(string) {
	let result = [];
	let sortedByChar = string.split('').sort(function(a, b) {
		let lowerA = a.toLowerCase();
		let lowerB = b.toLowerCase();
		if (lowerA < lowerB) {
	    	return -1;
	  	}
	  	if (lowerA > lowerB) {
	    	return 1;
  		}
  		return 0;
	});
	function loopString(start) {
		let holder = [sortedByChar[start]];
		let count = sortedByChar.lastIndexOf(sortedByChar[start]) - sortedByChar.indexOf(sortedByChar[start]) + 1;
		holder.push(count);
		result.push(holder);
		if (sortedByChar.lastIndexOf(sortedByChar[start]) !== sortedByChar.length - 1) {
			loopString(sortedByChar.lastIndexOf(sortedByChar[start]) + 1);
		}
	}
	loopString(0);

	//sort result array by second element of nested arrays
	return result.sort(function compareNumbers(a, b) {
  		return b[1] - a[1];
		});
};







