/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head ==null) return false;
            let hare = head
    let tortoise = head;
  
    while(true)
        {
            hare = hare.next;
            tortoise = tortoise.next;
            if(hare == null || hare.next == null)
                {
                    return false;
                }else{
                    hare = hare.next;
                }
            if(hare == tortoise) break;;
            
        }
    return true;
};