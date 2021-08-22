/*
  Given a phrase, substitute each character by shifting
  it up or down the alphabet by a given integer.
  If necessary, the shifting should wrap around back to the 
  beginning or end of the alphabet.
*/

function caesarCipher(str, num) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let result = "";
  for(let char of str) {
    const lowerChar = char.toLowerCase();
  	if(alphabets.includes(lowerChar)) {
    	const charIndex = alphabets.indexOf(lowerChar);
      let newIndex = (charIndex + num)%26;
      if(newIndex < 0) {
      	newIndex += 26; 
      }
      if(char === lowerChar) {
      	result += alphabets[newIndex];
      } else {
      	result += alphabets[newIndex].toUpperCase();
      }
    } else {
    	result += char;
    }
  }
  return result;
}

module.exports = caesarCipher;