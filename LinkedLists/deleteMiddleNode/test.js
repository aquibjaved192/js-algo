const deleteMiddle = require('./index-START').default;
const ListNode = require('../linkedList').default;

test('deleteMiddle is a function', () => {
  expect(typeof deleteMiddle).toEqual('function');
});

test('remove middle node', () => {
  let ques_fourth = new ListNode(4, null);
  let ques_third = new ListNode(3, ques_fourth);
  let ques_second = new ListNode(2, ques_third);
  let ques_first = new ListNode(3, ques_second);
  let ques_head = new ListNode(1, ques_first);

  let ans_third = new ListNode(4, null);
  let ans_second = new ListNode(3, ans_third);
  let ans_first = new ListNode(3, ans_second);
  let ans_head = new ListNode(1, ans_first);

  expect(deleteMiddle(ques_head)).toEqual(ans_head);
});

test('remove middle node', () => {
  let ques_fifth = new ListNode(3, null);
  let ques_fourth = new ListNode(3, ques_fifth);
  let ques_third = new ListNode(2, ques_fourth);
  let ques_second = new ListNode(1, ques_third);
  let ques_first = new ListNode(1, ques_second);
  let ques_head = new ListNode(1, ques_first);

  let ans_fourth = new ListNode(3, null);
  let ans_third = new ListNode(3, ans_fourth);
  let ans_second = new ListNode(2, ans_third);
  let ans_first = new ListNode(1, ans_second);
  let ans_head = new ListNode(1, ans_first);

  expect(deleteMiddle(ques_head)).toEqual(ans_head);
});





