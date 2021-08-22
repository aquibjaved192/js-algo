const caesarCipher = require('./index-START')

test('caeserCipher is a function', () => {
  expect(typeof caesarCipher).toEqual('function');
});

test('cipher a string', () => {
  expect(caesarCipher("I love JavaScript!", 100)).toEqual('E hkra FwrwOynelp!');
});

test('cipher a string', () => {
  expect(caesarCipher("I love JavaScript!", -100)).toEqual('M pszi NezeWgvmtx!');
});




