/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let store = null;
    let current = head;
    while(current)
        {
            let next = current.next;
            current.next = store;
            store = current;
            current = next;
        }
    return store
};