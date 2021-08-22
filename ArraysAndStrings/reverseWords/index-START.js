/*
  Given a phrase, reverse the order of the characters of each word.
  e.g. "I love pizza" should return "I evol azzip"
*/

const reverseString = require('../reverseString/index-START');

function reverseWords(str) {
  const words = str.split(" ");
  words.forEach((word, index) => {
    const reverseWord = reverseString(word);
    words[index] = reverseWord;
  });
  return words.join(' ');
}

module.exports = reverseWords;