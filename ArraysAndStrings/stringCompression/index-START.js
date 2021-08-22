/*
*Given an input string, write a function that returns the Run Length Encoded 
string for the input string.
*For example, if the input string is “wwwwaaadexxxxxx”,
then the function should return “w4a3d1e1x6”
*/


function stringCompression(str) {
  let result = '';
  for(let i=0; i<str.length; i++) {
    const char = str[i];
    let j = i+1;
    let count = 1;
    while(str[j] === char){
      count++;
      j++;
    }
    result += char+count;
    i = j-1;
  }
  return str.length > result.length ? result : str;
}

module.exports = stringCompression;