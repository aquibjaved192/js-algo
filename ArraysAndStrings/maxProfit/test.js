const maxProfit = require('./index-START');

test('maxProfit is a function', () => {
  expect(typeof maxProfit).toEqual('function');
});

test('Should return max profit', () => {
  expect(maxProfit([1, 2, 2, 3, 4])).toEqual([1,4]);
});

test('Should return max profit', () => {
  expect(maxProfit([5,2,6,1,4])).toEqual([2,6]);
});