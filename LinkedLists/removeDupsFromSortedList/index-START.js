/*
  write a function to delete duplicate nodes from a sorted linked list
  e.g. [1,2,3,3,4,4,5] should return [1,2,5]
*/

const ListNode = require('../linkedList');

function removeDupsFromSortedList(head) {
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  while(head !== null) {
    if(head.next !== null && head.value === head.next.value) {
      while(head.next !== null && head.value === head.next.value) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }
  return dummy.next;
}

module.exports = removeDupsFromSortedList;