const reverseWords = require('./index-START');

test('reverseWords is a function', () => {
  expect(typeof reverseWords).toEqual('function');
});

test('"I love pizza" should return "I evol azzip"', () => {
  expect(reverseWords("I love pizza")).toEqual("I evol azzip");
});

