/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  const minElem = Math.min(...rotated);
  const minIndex = rotated.indexOf(minElem);
  function bSearch(array) {
    let min = 0;
    let max = array.length - 1;
    let avg = Math.floor((min + max)/2);
    while (array[avg] !== target && min < max) {
      if (target < array[avg]) {
        max = avg - 1;
      } else {
        min = avg + 1;
      }
      avg = Math.floor((min + max)/2);
    }
    return (array[avg] !== target) ? null : avg
  }
  if (target > rotated[rotated.length - 1]) {
    return bSearch(rotated.slice(0, minIndex));
  } else if (target <= rotated[rotated.length - 1]) {
    const result = bSearch(rotated.slice(minIndex));
    return result === null ? null : result + minIndex;
  } else if (target === minElem) {
    return minIndex;
  }
};