const twoSum = require('./index-START');

test('twoSum is a function', () => {
  expect(typeof twoSum).toEqual('function');
});

test('Should implement two sum', () => {
  expect(twoSum([1, 2, 2, 3, 4], 4)).toEqual([[2, 2], [3, 1]]);
});