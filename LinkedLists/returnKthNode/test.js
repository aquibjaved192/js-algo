const returnNode = require('./index-START');
const ListNode = require('../linkedList');

test('returnNode is a function', () => {
  expect(typeof returnNode).toEqual('function');
});

test('returnNode 3rd node from last', () => {
  let ques_sixth = new ListNode(4, null);
  let ques_fifth = new ListNode(5, ques_sixth);
  let ques_fourth = new ListNode(4, ques_fifth);
  let ques_third = new ListNode(3, ques_fourth);
  let ques_second = new ListNode(2, ques_third);
  let ques_first = new ListNode(3, ques_second);
  let ques_head = new ListNode(1, ques_first);

  expect(returnNode(ques_head, 3)).toEqual(ques_fourth);
});

test('return null', () => {
  let ques_fourth = new ListNode(3, null);
  let ques_third = new ListNode(2, ques_fourth);
  let ques_second = new ListNode(1, ques_third);
  let ques_first = new ListNode(1, ques_second);
  let ques_head = new ListNode(1, ques_first);

  expect(returnNode(ques_head, 7)).toEqual(null);
});





