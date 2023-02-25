/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    
    let sml = [];
    let big = [];
    let eql = [];
    
    for(let i=0; i<nums.length; i++)
        {
            if(nums[i] < pivot)
                {
                    sml.push(nums[i]);
                }
            else if(nums[i] > pivot)
                {
                    big.push(nums[i]);
                }
            else{
                eql.push(nums[i]);
            }
        }
    return sml.concat(eql, big);
};