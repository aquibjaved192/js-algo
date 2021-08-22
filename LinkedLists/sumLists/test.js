const sumLists = require('./index-START');
const ListNode = require('../linkedList');

test('sumLists is a function', () => {
  expect(typeof sumLists).toEqual('function');
});

test('sum lists', () => {
  let ques_second_2 = new ListNode(2, null);
  let ques_first_2 = new ListNode(9, ques_second_2);
  let ques_head_2 = new ListNode(5, ques_first_2);

  let ques_second_1= new ListNode(6, null);
  let ques_first_1 = new ListNode(1, ques_second_1);
  let ques_head_1 = new ListNode(7, ques_first_1);

  let ans_second = new ListNode(9, null);
  let ans_first = new ListNode(1, ans_second);
  let ans_head = new ListNode(2, ans_first);

  expect(sumLists(ques_head_1,ques_head_2)).toEqual(ans_head);
});

test('sum lists', () => {
  let ques_first_2 = new ListNode(2, null);
  let ques_head_2 = new ListNode(5, ques_first_2);

  let ques_second_1= new ListNode(6, null);
  let ques_first_1 = new ListNode(7, ques_second_1);
  let ques_head_1 = new ListNode(7, ques_first_1);

  let ans_second = new ListNode(7, null);
  let ans_first = new ListNode(0, ans_second);
  let ans_head = new ListNode(2, ans_first);

  expect(sumLists(ques_head_1,ques_head_2)).toEqual(ans_head);
});

test('sum lists', () => {
  let ques_head_2 = new ListNode(9, null);

  let ques_head_1 = new ListNode(9, null);

  let ans_first = new ListNode(1, null);
  let ans_head = new ListNode(8, ans_first);

  expect(sumLists(ques_head_1,ques_head_2)).toEqual(ans_head);
});

test('sum lists', () => {
  let ques_head_2 = new ListNode(3, null);

  let ques_head_1 = new ListNode(3, null);

  let ans_head = new ListNode(6, null);

  expect(sumLists(ques_head_1,ques_head_2)).toEqual(ans_head);
});

test('sum lists', () => {
  let ques_head_1 = new ListNode(9, null);

  let ans_head = new ListNode(9, null);

  expect(sumLists(ques_head_1,null)).toEqual(ans_head);
});

test('sum lists', () => {
  expect(sumLists(null,null)).toEqual(null);
});





