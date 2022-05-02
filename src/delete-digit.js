const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let strArray = Array.from(String(n));
  let max = '';
  let newArray = [];
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray.length; j++) {
      if (i !== j) {
        newArray = newArray + strArray[j];
      }
    }
    if (newArray > max) {
      max = newArray;
    }
    newArray = [];
  }
  return Number(max);
}

module.exports = {
  deleteDigit
};