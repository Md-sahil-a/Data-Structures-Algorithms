/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let newarr = [];
    for(let i=0; i<nums.length; i++)
        {
            let a = +(nums[i].toString().split("").reverse().join(""));
            newarr.push(a);
        }
    let resarr = nums.concat(newarr);
    
    let obj = {};
    let count = 0;
    for(let i=0; i< resarr.length; i++)
        {
            if(obj[resarr[i]])
                {
                    count++;
                }
            else{
                obj[resarr[i]] = 1;
            }
        }
    return resarr.length - count;
    
};