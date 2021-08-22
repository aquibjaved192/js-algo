/*
 * Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.  
*/

const reverseArray = require('../reverseArray/index-START');

function rotateArray(arr,d,n) {
  const result1 = reverseArray(arr, 0, d);
  const result2 = reverseArray(result1, d+1, n)
  return reverseArray(result2, 0, n);
}

module.exports = rotateArray;