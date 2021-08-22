const spiralMatrix = require('./index-START');

test('spiralMatrix is a function', () => {
  expect(typeof spiralMatrix).toEqual('function');
});

test('Should implement matrix spiral', () => {
  expect(spiralMatrix(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
});
