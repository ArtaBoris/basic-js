const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arrS1 = Array.from(s1);
  let arrS2 = Array.from(s2);
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < arrS2.length; j++) {
      if (arrS1[i] === arrS2[j]) {
        i++;
        count++;
        arrS2.splice(j, 1);
        j = 0;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
