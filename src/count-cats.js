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
function countCats(arr) {
  let c = 0;

  console.log(arr);
  if (arr === null || typeof arr === 'undefined') return c;
  if (arr[0] === null || typeof arr[0] === 'undefined') return c;

  const a = arr.length;
  const b = arr[0].length;

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      if (arr[i][j] === '^^') {
        c++;
      }
    }
  }

  return c;
}

module.exports = {
  countCats
};
