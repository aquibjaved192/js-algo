/*
 * Create a square matrix of a given size in which elements are in spiral order. 
 */

 function spiralMatrix(size) {
  let minr = 0
  let maxr = size-1;
  let minc = 0;
  let maxc = size-1;
  let count = 1;
  let result = []

  for(let i=0; i<size; i++) {
    result.push([]);
  }

  while(minr<=maxr && minc<=maxc) {
    for(let i=minc; i<=maxc; i++) {
      result[minr][i] = count;
      count++;
    }
    minr++;

    for(let i=minr; i<=maxr; i++) {
      result[i][maxc] = count;
      count++;
    }
    maxc--;

    for(let i=maxc; i>=minc; i--) {
      result[maxr][i] = count;
      count++;
    }
    maxr--;

    for(let i=maxr; i>=minr; i--) {
      result[i][minc] = count;
      count++;
    }
    minc++;
  }
  return result;
 }

 module.exports = spiralMatrix;