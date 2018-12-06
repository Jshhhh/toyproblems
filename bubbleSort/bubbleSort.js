
var bubbleSort = function(array) {
  let sortedArray = array;
  let current = 0;
  let index = 1;
  let sorting = true;

  while (sorting) {
    sorting = false;
    for (let i = 0; i < array.length; i++) {
      let curr = array[i];
      for (let j = i+1; j < array.length; j++) {
        let next = array[j];
        if (curr > next) {
          sorting = true;
          array[i] = next;
          array[j] = curr;
          i = j;
        }
      }
    }
  }
    return array;
};

console.log(bubbleSort([2,1]));