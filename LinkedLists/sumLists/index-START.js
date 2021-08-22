/*
  You have two numbers represented by linnked lists, where each node
  contains a single digit. The digits are stored in  reverse order,
  such that the 1's digit is at the head of the list. write a function
  that adds the two numbers and returns the sum as a linked list.
  e.g. (7 -> 1 -> 6) + (5 -> 9 -> 2) = (2 -> 1 -> 9)
            617      +      295      =      912
*/

const ListNode = require('../linkedList');

function sumLists(head1, head2) {
  let result = new ListNode(-1, null);
  let runner = result;
  let carry = 0;
  while(head1 !== null || head2 !== null || carry !== 0) {
    const sum = (head1 === null ? 0 : head1.value) + (head2 === null ? 0 : head2.value) + carry;
    const digit = sum%10;
    carry = Math.floor(sum/10);
    const node = new ListNode(digit, null);
    runner.next = node;
    runner = runner.next;
    head1 = head1 === null ? head1 : head1.next;
    head2 = head2 === null ? head2 : head2.next;
  }
  return result.next;
}

module.exports = sumLists;