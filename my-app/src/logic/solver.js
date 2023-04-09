// This implementation was made by ChatGPT

function solveSudoku(board) {
  if (solveHelper(board, 0, 0)) {
    return board;
  } else {
    return null;
  }
}

function solveHelper(board, row, col) {
  // Check if we have reached the end of the board
  if (row == 9) {
    return true;
  }

  // Calculate the next row and column indices
  let nextRow = col == 8 ? row + 1 : row;
  let nextCol = col == 8 ? 0 : col + 1;

  // If the current cell is already filled, move on to the next one
  if (board[row][col] != 0) {
    return solveHelper(board, nextRow, nextCol);
  }

  // Try each possible digit for the current cell
  for (let digit = 1; digit <= 9; digit++) {
    if (isValid(board, row, col, digit)) {
      board[row][col] = digit;
      if (solveHelper(board, nextRow, nextCol)) {
        return true;
      }
      board[row][col] = 0;
    }
  }

  // If we've tried all digits and none work, backtrack
  return false;
}

function isValid(board, row, col, digit) {
  // Check if the digit is already in the same row or column
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == digit || board[i][col] == digit) {
      return false;
    }
  }

  // Check if the digit is already in the same 3x3 subgrid
  let subRow = Math.floor(row / 3) * 3;
  let subCol = Math.floor(col / 3) * 3;
  for (let i = subRow; i < subRow + 3; i++) {
    for (let j = subCol; j < subCol + 3; j++) {
      if (board[i][j] == digit) {
        return false;
      }
    }
  }

  // If none of the checks fail, the digit is valid
  return true;
}
