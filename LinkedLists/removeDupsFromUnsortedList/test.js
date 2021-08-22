const removeDupsFromUnsortedList = require('./index-START');
const ListNode = require('../linkedList');

test('removeDupsFromUnsortedList is a function', () => {
  expect(typeof removeDupsFromUnsortedList).toEqual('function');
});

test('remove duplicates', () => {
  let ques_sixth = new ListNode(4, null);
  let ques_fifth = new ListNode(5, ques_sixth);
  let ques_fourth = new ListNode(4, ques_fifth);
  let ques_third = new ListNode(3, ques_fourth);
  let ques_second = new ListNode(2, ques_third);
  let ques_first = new ListNode(3, ques_second);
  let ques_head = new ListNode(1, ques_first);

  let ans_fourth = new ListNode(5, null);
  let ans_third = new ListNode(4, ans_fourth);
  let ans_second = new ListNode(2, ans_third);
  let ans_first = new ListNode(3, ans_second);
  let ans_head = new ListNode(1, ans_first);

  expect(removeDupsFromUnsortedList(ques_head)).toEqual(ans_head);
});

test('remove duplicates', () => {
  let ques_fourth = new ListNode(3, null);
  let ques_third = new ListNode(2, ques_fourth);
  let ques_second = new ListNode(1, ques_third);
  let ques_first = new ListNode(1, ques_second);
  let ques_head = new ListNode(1, ques_first);

  let ans_second = new ListNode(3, null);
  let ans_first = new ListNode(2, ans_second);
  let ans_head = new ListNode(1, ans_first);

  expect(removeDupsFromUnsortedList(ques_head)).toEqual(ans_head);
});





