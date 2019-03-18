

const matrix = [
  [1, 0, 5, 0, 9, 0, 0, 8, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 8, 0, 0, 0, 0],
  [0, 3, 0, 0, 7, 4, 0, 1, 0],
  [0, 4, 0, 0, 0, 0, 0, 9, 0],
  [0, 2, 0, 5, 0, 0, 0, 0, 8],
  [0, 0, 0, 7, 5, 0, 0, 2, 1],
  [0, 0, 0, 8, 1, 0, 0, 6, 3],
  [8, 0, 0, 0, 0, 3, 0, 0, 0]
];

solveSudoku(matrix);




function solveSudoku(matrix) {
  // console.log('matrix', matrix);
  // module.exports = function solveSudoku(matrix) {

  // 





}

matrixOpportunity(matrix);
function matrixOpportunity(matrix) {
  console.log('matrix', matrix);


  let x = 2;
  let y = 4;

  arrX = valuesRow(matrix, x);
  console.log('arrX', arrX);
  arrY = valuesColumn(matrix, y);
  console.log('arrY', arrY);
  arrBlock = valuesBlock(matrix, x, y);
  console.log('arrBlock', arrBlock);

}

function valuesRow(matrix, x) {
  return matrix[x]; // arr X
}

function valuesColumn(matrix, y) {
  let arr = [];
  let length = matrix.length;
  for (let x = 0; x < length; x++) {
    arr.push(matrix[x][y]);
  }
  return arr; // arr Y
}

function valuesBlock(matrix, x, y) {
  const startX = (Math.floor(x / 3)) * 3; // 0 3 6
  const startY = (Math.floor(y / 3)) * 3;
  let arr = [];
  for (let x = startX; x < startX + 3; x++) {
    for (let y = startY; y < startY + 3; y++) {
      arr.push(matrix[x][y]);
    }
  }
  return arr; // arr Block
}