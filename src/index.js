

// const matrix = [
//   [0, 5, 0, 4, 0, 0, 0, 1, 3],
//   [0, 2, 6, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 9, 0],
//   [0, 0, 0, 0, 8, 5, 6, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 6, 0, 0, 0, 0],
//   [3, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 7, 3, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 5, 0, 0]
// ];


// console.log('solveSudoku(matrix)', solveSudoku(matrix))
// function solveSudoku(matrix) {
module.exports = function solveSudoku(matrix) {
  if (sudokuSearch(matrix)) return matrix;
}


function sudokuSearch(matrix, x, y) {

  // ищем координаты нулей в матрице
  let cell = findZero(matrix); // { x, y }
  if (cell == null) return true;
  x = cell.x;
  y = cell.y;

  // решаем через рекурсию
  const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const number of possibleValues) {
    if (opportunity(matrix, x, y, number)) {
      matrix[x][y] = number;
      if (sudokuSearch(matrix, x, y)) return true;
      matrix[x][y] = 0;
    }

  }
  return false;
}


function opportunity(matrix, x, y, number) {
  if (checkRow(matrix, x, number) == number) return false;
  if (checkColumn(matrix, y, number) == number) return false;
  if (checkBlock(matrix, x, y, number) == number) return false;
  return true;
}

function checkRow(matrix, x, number) {
  for (const y of matrix[x]) {
    if (y == number) return number;
  }
}

function checkColumn(matrix, y, number) {
  for (let x = 0; x < matrix.length; x++) {
    if (matrix[x][y] == number) return number;
  }
}

function checkBlock(matrix, x, y, number) {
  const startX = (Math.floor(x / 3)) * 3; // 0 3 6
  const startY = (Math.floor(y / 3)) * 3;
  for (let x = startX; x < startX + 3; x++) {
    for (let y = startY; y < startY + 3; y++) {
      if (matrix[x][y] == number) return number;
    }
  }
}

function findZero(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 0) return { x, y };
    }
  }
  return null;
}