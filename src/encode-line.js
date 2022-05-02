const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let encodeStr = '';
  let letterCount = 1;
  for (let i = 0; i < str.length - 1; i++) {
    let j = i + 1;
    if (str[i] === str[j]) {
      letterCount++;
    } else if (letterCount === 1) {
      encodeStr += str[i];
    } else {
      encodeStr += letterCount + str[i];
      letterCount = 1;
    }
    if (j === (str.length - 1) && letterCount !== 1) {
      encodeStr += letterCount + str[i];
    }
    if (j === (str.length - 1) && str[i] !== str[j]) {
      encodeStr += str[j];
    }
  }
  return encodeStr;
}

module.exports = {
  encodeLine
};