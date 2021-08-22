const findPrimes = require('./index-START');

test('findPrimes is a function', () => {
  expect(typeof findPrimes).toEqual('function');
});

test('Should return all prime numbers', () => {
  expect(findPrimes(1)).toEqual([]);
});

test('Should return all prime numbers', () => {
  expect(findPrimes(2)).toEqual([2]);
});

test('Should return all prime numbers', () => {
  expect(findPrimes(10)).toEqual([2, 3, 5, 7]);
});

test('Should return all prime numbers', () => {
  expect(findPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
});