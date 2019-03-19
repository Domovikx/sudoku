

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






function minOppLenght(arr) {
  let obj = {};
  for (const a of arr) {
    if (obj.oppLength == undefined) {
      obj = a;
    }
    if (obj.oppLength > a.oppLength) {
      obj = a;
    }
  }
  // console.log('obj', obj);
  return obj;
}

function oppLenghtAll(arr) {
  let count = 0;
  for (const a of arr) {
    count += a.oppLength;
  }
  // console.log('count', count);
  return count;
}

findZeros(matrix)
function findZeros(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 0) {
        console.log('x,y :', x, y);
        // return;
        while (matrix[x][y] == 0) {
          let obj = findOptions(matrix);
          // console.log('obj', obj);
          matrix[obj.x][obj.y] = obj.number;
          console.log('matrix', matrix);

        }
      }
    }
  }
}


findOptions(matrix);
function findOptions(matrix) {

  let arr = matrixOpportunity(matrix);

  let min = {};
  min = minOppLenght(arr);
  // console.log('min', min);

  // console.log('matrix', matrix);

  let obj = {};
  for (const i of min.opp) {
    // console.log('i', i)
    let matrixCheck = copyArr(matrix);

    matrixCheck[min.x][min.y] = i;
    console.log('matrixCheck', matrixCheck);

    arr = matrixOpportunity(matrixCheck);
    console.log('arr', arr)
    amountOfOptions = oppLenghtAll(arr);
    
    if (obj.amountOfOptions == undefined) {
      obj.amountOfOptions = amountOfOptions;
      obj.number = i;
      obj.x = min.x;
      obj.y = min.y;
    }
    if (obj.amountOfOptions < amountOfOptions) {
      obj.amountOfOptions = amountOfOptions;
      obj.number = i;
      obj.x = min.x;
      obj.y = min.y;
    }

  }
  console.log('obj', obj);
  return obj;
}





// matrixOpportunity(matrix);
function matrixOpportunity(matrix) {
  let arr = [];
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 0) {
        let opp = opportunity(matrix, x, y); // [7, 8, 9]
        let oppLength = opp.length;
        arr.push({ oppLength, opp, x, y });
      }
    }
  }
  // console.log('arr :', arr);
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
}

function copyArr(arr) {
  let arrNew = [];
  for (const m of arr) {
    arrNew.push(m.slice());
  }
  return arrNew;
}