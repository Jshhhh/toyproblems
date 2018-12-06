/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  //create makeboard by n
  if (board === null) {
    var board = makeBoard(n);
  }
  //create var to hold number of paths
  var paths = 0;
  
  //check if board hasbeenvisited of current i j is false
  if (!board.hasBeenVisited(i, j)) {
    //toggle piece of i j
    board.togglePiece(i, j);
    //if i and j equal board length
    if (i === n - 1 && j === n - 1) {
      //return increment count
      return paths++;
    }
    //if (i + 1 < n && i - 1 >= 0) {
    if (i + 1 < n && i - 1 >= 0) {
      //recurse with n, current board, i + 1, j;
      robotPaths(n, board, i + 1, j);
      //recurse with n, current board, i - 1, j
      robotPaths(n, board, i - 1, j);
    }
    //if (j + 1 < n && j - 1 >= 0)
    if (j + 1 < n && j - 1 >= 0) {
      //recurse with n, current board, i, j + 1;
      robotPaths(n, board, i, j + 1);
      //recure with n, current board, i, j - 1;
      robotPaths(n, board, i, j - 1);
    }
  }
  //return number of paths
  return paths;
};

