/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function counterMapping(str) {
    const obj = {};
    for(let char of str){
        if(obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}



function isAnagram(stringA, stringB) {
    if(stringA.length !== stringB.length){
        return false;
    }
    const objA = counterMapping(stringA);
    const objB = counterMapping(stringB);
    for(let char in objA) {
        if(objA[char] !== objB[char]){
            return false;
        }
    }
    return true;
}


module.exports = isAnagram