const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(array) {
  let count = 0;
  for (innerArray of array) {
    for (el of innerArray) {
      if (el === '^^') {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};