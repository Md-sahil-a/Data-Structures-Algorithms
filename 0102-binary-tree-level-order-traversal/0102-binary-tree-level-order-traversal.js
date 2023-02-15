/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let queue = [root];
    while(queue.length)
        {
            let len = queue.length;
            let count = 0;
            let currentvalue = [];
            while(count < len)
                {
                    let node = queue.shift();
                    currentvalue.push(node.val);
                    if(node.left) queue.push(node.left);
                    if(node.right) queue.push(node.right);
                    count++;
                }
            res.push(currentvalue);
        }
    return res;
};