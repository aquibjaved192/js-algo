/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    return text.split(' ').reduce((maxWord, currentWord) => {
        if(currentWord.length > maxWord.length){
            return currentWord;
        }
        return maxWord;
    }, '')
}


module.exports = longestWord