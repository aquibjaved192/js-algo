/*
* Rotate a matrix by 90 degree in clockwise direction
* without using any extra space.
*/

function rotateMatrix(arr) {
  for(let j=0; j<arr.length; j++) {
  	let text = ''
    for(let i=arr.length-1; i>=0; i--){
      text += arr[i][j]+' ';
    }
    console.log(text.trim());
  }
}

module.exports = rotateMatrix;