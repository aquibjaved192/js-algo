const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('explain should be changed to explainway', () => {
  expect(pigLatin('explain')).toEqual('explainway');
});

test('pig should be changed to igpay', () => {
  expect(pigLatin('pig')).toEqual('igpay');
});

test('glove should be changed to oveglay', () => {
  expect(pigLatin('glove')).toEqual('oveglay');
});

test('rhythm should be changed to rhythmay', () => {
  expect(pigLatin('rhythm')).toEqual('rhythmay');
});
