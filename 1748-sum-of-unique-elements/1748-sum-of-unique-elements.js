/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {};
    
    let sum = 0;
    for(let n of nums)
        {
            if(obj[n])
                {
                    obj[n] +=1;
                }
            else{
                obj[n] = 1;
            }
        }
    for(k in obj)
        {
            if(obj[k] ==1)
                {
                    sum+= +(k);
                }
        }
    return sum;
};