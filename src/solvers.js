/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findSolution = function(row, n, board, validator, callback){ 
  //base case: if row === n
  if(row === n){
    // return 
    return callback();
  }
  // iterate over the board 
  for(var i = 0; i < n; i++){
    // toggle the element (row,i)
    board.togglePiece(row,i);
      // if no conflict, keep recursion
    if(!board[validator]()){
      findSolution(row+1, n, board, validator, callback);
    }
    // toggle it off
    board.togglePiece(row,i);
  }
};


window.findNRooksSolution = function(n,row,col,rooksCount) {
  var solution = new Board({n:n}); 
  // solution.rows()
  // iterate through the solution.rows()
      // toggle to 1
      // call hasanyconflicts
        // if conflict  
          // toggle back to 0
  row = row || 0;
  col = col || 0;       
  rooksCount = rooksCount || 0;
  var rows = solution.rows();
  for ( var i = row; i < rows.length; i++ ) {
    for ( var j = col; j < rows[i].length; j++ ) {
      if(rooksCount === n){return solution.rows();}
      solution.togglePiece(i, j);
      rooksCount++;
      if ( solution.hasAnyColConflicts() || solution.hasAnyRowConflicts() ) {
        rooksCount--;
        solution.togglePiece(i, j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log("rooks count: "+rooksCount);
  if(rooksCount === n){return solution.rows();}
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 

  // create a new board
  var board = new Board({n:n});

  findSolution(0, n, board, "hasAnyRooksConflicts", function(){
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) { 
  var solution = undefined;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
