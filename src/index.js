

const matrix = [
  [0, 5, 0, 4, 0, 0, 0, 1, 3],
  [0, 2, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 9, 0],
  [0, 0, 0, 0, 8, 5, 6, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 0, 0, 0, 0],
  [3, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 7, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0]
];

// solveSudoku(matrix);


const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function solveSudoku(matrix) {
//   // console.log('matrix', matrix);
//   // module.exports = function solveSudoku(matrix) {

//   // 





// }

// zxc();
// function zxc() {

//   for (let x = 0; x < matrix.length; x++) {
//     for (let y = 0; y < matrix[x].length; y++) {
//       if (matrix[x][y] == 0) {
//         // console.log('x,y :', x,y);
//       }
//     }
//   }

//   let arr = matrixOpportunity(matrix);

//   let min = {};
//   min = minOppLenght(arr);
//   console.log('min', min)

//   let lengthOpp = oppLenghtAll(arr);

// let asd = [];
// for (const i of min.opp) {
//   console.log('i', i)  
//   matrix[min.x][min.y] = i;
//   asd.push( oppLenghtAll(arr) );
// }
// console.log('asd', asd)


// // console.log('min :', min);




// }



// function minOppLenght(arr) {
//   let obj = {};
//   for (const a of arr) {
//     if (obj.oppLength == undefined) {
//       obj = a;
//     }
//     if (obj.oppLength > a.oppLength) {
//       obj = a;
//     }
//   }
//   // console.log('obj', obj);
//   return obj;
// }

// function oppLenghtAll(arr) {
//   let count = 0;
//   for (const a of arr) {
//     count += a.oppLength;
//   }
//   // console.log('count', count);
//   return count;
// }










asd()
function asd() {
  
let matrix2 = copyArr(matrix);
matrix2[0][0] = 5;
let matrix3 = copyArr(matrix);
matrix3[0][0] = 6;

console.log('matrix', matrix)
console.log('matrix2', matrix2)
console.log('matrix3', matrix3)

}



function copyArr(arr) {
  let arrNew = [];
  for (const m of arr) {
    arrNew.push(m.slice());
  }
  return arrNew;
}


matrixOpportunity(matrix);
function matrixOpportunity(matrix) {
  let arr = [];
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 0) {
        let opp = opportunity(matrix, x, y); // [7, 8, 9]
        // let oppLength = opp.length;
        arr.push({ opp, x, y });
      }
    }
  }
  console.log('arr :', arr);
  return arr; //(64) [{…},…]  //0: {oppLength: 3, opp: Array(3), x: 0, y: 0}
}


// opportunity(matrix, 2, 4);
function opportunity(matrix, x, y) {

  const arrX = valuesRow(matrix, x);
  const arrY = valuesColumn(matrix, y);
  const arrBlock = valuesBlock(matrix, x, y);
  let arr = [...arrX, ...arrY, ...arrBlock];
  arr = unique(arr);

  let opportunity = possibleValues.slice();
  for (let i = 0; i < arr.length; i++) {
    opportunity.splice(opportunity.indexOf(arr[i]), 1);
  }

  // console.log('opportunity', opportunity)
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