const ransomNote = require('./index-START');
const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

test('ransomNote is a function', () => {
  expect(typeof ransomNote).toEqual('function');
});

test('check magazine for ransom note', () => {
  expect(ransomNote('sit ad est sint',magazine)).toBeTruthy();
});

test('check magazine for ransom note', () => {
  expect(ransomNote('sit ad est love',magazine)).toBeFalsy();
});

test('check magazine for ransom note', () => {
  expect(ransomNote('sit ad est sint in in',magazine)).toBeTruthy();
});

test('check magazine for ransom note', () => {
  expect(ransomNote('sit ad est sint in in in in',magazine)).toBeFalsy();
});

