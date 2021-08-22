/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let start = 0;
    let end = text.length - 1;
    while(end > start) {
        if(text[start] === text[end]){
            start++;
            end--;
        } else {
            return false
        }
    }
    return true;
}



module.exports = palindromeChecker;