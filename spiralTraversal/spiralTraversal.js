/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
	//create var to hold array of nums
	var result = [];
	function addOuter(layer) {
		//iterate through first row
		for (var i = 0; i < layer.length; i++) {
			//push each value into array
			result.push(layer[0][i]);
		}
		//iterate through last column starting on second [1] row
		for (var j = 1; j < layer.length; j++) {
			//push each value into array
			result.push(layer[j][layer.length - 1]);
		}
		//iterate reverse through last row
		for (var k = layer.length - 2; k >= 0; k --) {
			//push value into array
			result.push(layer[layer.length - 1][k]);
		}
		//iterate bottom up in first column from second to last row to second row
		for (var l = layer.length - 2; l >= 1; l--) {
			//push value into array
			result.push(layer[l][0]);
		}
		
		//creates inner matrix 
		var innerLayer = [];
		for (var m = 1; m < layer.length - 1; m++) {
			innerLayer.push(layer[m].slice(1, layer.length -1));
		}
		//recurse through inner matrix
		if (innerLayer.length) {
			addOuter(innerLayer);
		}
	}
	addOuter(matrix);
	return result;
};
