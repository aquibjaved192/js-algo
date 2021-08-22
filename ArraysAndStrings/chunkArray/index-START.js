/* 
Given an array and a size, split the array items into a list of
arrays of the given size.
*/

function chunkArray(array, size) {
    let result = [];
    let chunk = [];
    array.forEach(num => {
        if(chunk.length === size){
            result.push(chunk);
            chunk = [];
        }
        chunk.push(num);
    })
    result.push(chunk);
    return result;
}


module.exports = chunkArray