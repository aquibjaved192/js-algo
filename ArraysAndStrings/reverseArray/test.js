const reverseArray = require('./index-START');

test('reverseArray is a function', () => {
  expect(typeof reverseArray).toEqual('function');
});

test('[1,2,3,4,5] should return [5,4,3,2,1]', () => {
  expect(reverseArray([1,2,3,4,5], 0, 4)).toEqual([5,4,3,2,1]);
});

