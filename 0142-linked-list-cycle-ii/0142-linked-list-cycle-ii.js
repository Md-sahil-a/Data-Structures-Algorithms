/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head == null) return null;
    let f = head;
    let s = head;
    while(true)
        {
            f = f.next;
            s = s.next;
            if(f ==null || f.next == null){
                return null;
            }else{
                f = f.next;
            }
            if(f == s) break;
        }
    let p1 = head;
    let p2 = s;
    while(p1 !== p2)
        {
            p1 = p1.next;
            p2 = p2.next;
        }
    return p1;
    
};