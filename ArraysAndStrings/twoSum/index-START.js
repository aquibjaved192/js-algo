/*
Given an array of numbers, return all pairs that add up to a given sum.
The numbers can be used more than once.
*/

function twoSum(arr, sum) {
	const counterMap = {};
  const result = [];
  arr.forEach(num => {
  	if(counterMap[(sum-num).toString()]){
    	result.push([num, sum-num]);
    }
    counterMap[num.toString()] = true;
  })
  return result;
}

module.exports = twoSum;