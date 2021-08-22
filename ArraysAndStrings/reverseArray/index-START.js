/*
  write a function which will reverse the elements contained in an array
  e.g. [1,2,3,4,5] should return [5,4,3,2,1]
*/

function reverseArray(arr, first, last) {
  while(first < last) {
    const temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    first++;
    last--;
  }
  return arr;
}

module.exports = reverseArray;