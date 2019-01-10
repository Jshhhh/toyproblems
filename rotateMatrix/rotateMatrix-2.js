var rotate = function(matrix) {
  for (let start = 0; start < matrix.length-1; start++) {
      let index = start;
      while (index < matrix.length - 1 - start) {
          let first = matrix[start][index];
          let second = matrix[index][matrix[0].length-1-start];
          let third = matrix[matrix.length-1-start][matrix.length-1-index];
          let fourth = matrix[matrix.length-1-index][0+start];
          matrix[start][index] = fourth 
          matrix[index][matrix[0].length-1-start] = first 
          matrix[matrix.length-1-start][matrix.length-1-index] = second 
          matrix[matrix.length-1-index][0+start] = third
          
          index++;
      } 
  }
};