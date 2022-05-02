const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((sum, elem) => sum + elem);
  if (matrix.length === 1) {return sum;}
  for (let j = 0; j < matrix[0].length; j++) {
    let arrOfMatrix = 0;
    while (arrOfMatrix < matrix.length - 1) {
      if (matrix[arrOfMatrix][j] !== 0) {
        arrOfMatrix++;
        sum += matrix[arrOfMatrix][j];
      } else {
        arrOfMatrix = matrix.length;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
