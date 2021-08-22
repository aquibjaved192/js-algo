/*
  implement an algorithm to delete a mode in the middle from
  a singly linked list.

  [1,2,3,4,5,6] should return [1,2,4,5,6]
*/

function deleteMiddle(head) { 
  if(head === null || head.next === null) {
    return null;
  } else {
    let current = head;
    let runner = head;
    while(runner.next !== null && runner.next.next !== null) {
      current = current.next;
      runner = runner.next.next;
    }
    current.value = current.next.value;
    current.next = current.next.next;
    return head;
  }
}

export default deleteMiddle;