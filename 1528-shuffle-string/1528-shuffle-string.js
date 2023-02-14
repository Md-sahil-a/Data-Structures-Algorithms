/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let op = s;
    op = op.split("");
    
    for(let i=0;i<indices.length; ++i)
        {
            op[indices[i]] = s[i];
        }
    return op.join("");
};