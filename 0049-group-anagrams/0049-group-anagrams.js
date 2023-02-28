/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sorted = [];
    for(let i=0; i<strs.length; i++)
        {
            let a =strs[i].split("").sort().join("");
            sorted.push(a);
        }
    let obj = {};
    for(let i=0; i< sorted.length; i++)
        {
            if(!obj[sorted[i]])
                {
                    obj[sorted[i]] = [strs[i]];
                }else{
                    obj[sorted[i]].push(strs[i]);
                }
        }
    return Object.values(obj);
    
};