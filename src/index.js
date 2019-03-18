

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


const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solveSudoku(matrix) {
  // console.log('matrix', matrix);
  // module.exports = function solveSudoku(matrix) {

  // 





}

// matrixOpportunity(matrix);
function matrixOpportunity(matrix) {
  console.log('matrix', matrix);






}


opportunity(matrix, 2, 4);
function opportunity(matrix, x, y) {

  arrX = valuesRow(matrix, x);
  arrY = valuesColumn(matrix, y);
  arrBlock = valuesBlock(matrix, x, y);

  let arr = [...arrX, ...arrY, ...arrBlock];
  arr = unique(arr);

  let opportunity = possibleValues.slice();
  for (let i = 0; i < arr.length; i++) {
    opportunity.splice(opportunity.indexOf(arr[i]), 1);
  }

  console.log('opportunity', opportunity)
  return opportunity; // [1] or [2, 3, 6] or ...
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

function unique(arr) {
  arr = arr.sort();
  let arrNew = [];
  let x;
  for (const a of arr) {
    if (a == 0) continue;
    if (x == a) continue;
    if (x != a) {
      arrNew.push(a);
      x = a;
    }
  }
  return arrNew;
};