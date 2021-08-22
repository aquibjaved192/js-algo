/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    const charMap = {};
    let maxChar = '';
    let maxValue = 0;
    for(let char of text) {
        if(charMap[char]) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
    }
    for(let char in charMap) {
        if(charMap[char] > maxValue){
            maxChar = char;
            maxValue = charMap[char];
        }
    }
    return maxChar;
}



module.exports = maxRecurringChar;