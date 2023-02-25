/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let o = 1;
    let e = 0;
    
    let res = [];
    for(n of nums)
        {
            if(n%2==0)
                {
                    res[e] = n;
                    e +=2;
                }else{
                    res[o] = n;
                    o +=2;
                }
        }
    return res;
    
};