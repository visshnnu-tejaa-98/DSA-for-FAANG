const matrixMultiplication = (matrix1, matrix2, resultMatrix) => {
  let mm = new Array(2).fill(new Array(2).fill(0));
  console.log(mm);
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1.length; j++) {
      resultMatrix[i][j] = 0;
      for (let k = 0; k < matrix1.length; k++) {
        resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }
  return resultMatrix;
};

let matrix1 = [
  [1, 2],
  [3, 4],
];
let matrix2 = [
  [5, 6],
  [7, 8],
];

let resultMatrix = [
  [0, 0],
  [0, 0],
];

let result = matrixMultiplication(matrix1, matrix2, resultMatrix);
console.log(result);
