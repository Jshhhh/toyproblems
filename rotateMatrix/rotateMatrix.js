
// Rotate a NxN matrix by 90 degrees.

var rotateMatrix = function(matrix, direction) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0) {
        if (direction !== -1) {
          result.push([matrix[i][j]]);
        } else {
          result.unshift([matrix[i][j]]);
        }
      } else {
        if (direction !== -1) {
          result[j].unshift(matrix[i][j]);
        } else {
          result[matrix.length - 1 - j].push(matrix[i][j]);
        }
      }
    }
  }
  return result;
};