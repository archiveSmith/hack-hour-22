/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
function Node(val) {
  this.value = val;
  this.next = null;
}


function deleteDups(head) {
  const values = [];
  const current = head;
  let last;

  while (current) {
    if (values.contains(current.value)) {
      last.next = current.next;
      current = current.next;
    } else {
      last = current;
      current = current.next;
    }
  }


}

module.exports = deleteDups;
