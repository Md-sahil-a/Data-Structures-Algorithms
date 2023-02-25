/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let p =0;
    let n =1;
     let res = [];
    
    for(let i=0; i<=nums.length-1; i++)
        {
            if(nums[i]<0)
                {
                    res[n]= nums[i]
                    n+=2;
                }
            else{
                res[p] = nums[i];
                p+=2;
            }
        }
    return res;
    
};