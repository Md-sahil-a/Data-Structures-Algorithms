/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let obj = {};
    let goodPair = 0;
    for(let i=0; i<nums.length; i++)
        {
            if(obj[nums[i]] == undefined)
              
                {
                    obj[nums[i]] = 0;
                }else{
                    obj[nums[i]] += 1;
                    goodPair +=  obj[nums[i]];
                    
                }
        }
    return goodPair;
};