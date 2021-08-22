/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    if(stringA.length !== stringB.length) {
        throw new Error('Strings have unequal length');
    } else {
        let result = 0;
        for(let i=0; i<stringB.length; i++) {
            if(stringB[i] !== stringA[i]){
                result++;
            }
        }
        return result;
    }
}



module.exports = hammingDistance