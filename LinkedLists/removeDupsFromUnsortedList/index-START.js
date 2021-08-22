/*
  write a function to delete duplicate nodes from a unsorted linked list
  e.g. [1,3,2,3,4,5,4] should return [1,3,2,4,5]
*/

const ListNode = require('../linkedList');

function removeDupsFromUnsortedList(head) {
  const obj = {};
  let prev = new ListNode();
  let current = head;
  while(current !== null) {
    if(obj[current.value.toString()]) {
      prev.next = current.next;
    } else {
      obj[current.value.toString()] = true;
      prev = current;
    }
    current = current.next;
  }
  return head;
}

module.exports = removeDupsFromUnsortedList;