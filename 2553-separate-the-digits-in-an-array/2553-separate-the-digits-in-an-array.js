/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = nums.join("").split("").map(Number);
    return res;
};