/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
    let result = []
    arrays.forEach(arr => {
        arr.forEach(item => !result.includes(item) && result.push(item));
    });
    return result;
}


module.exports = mergeArrays