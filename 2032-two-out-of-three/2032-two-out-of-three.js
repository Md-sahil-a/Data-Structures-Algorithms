/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
 let ar1 = new Array(101).fill(0)
    let ar2 = new Array(101).fill(0)
    let ar3 = new Array(101).fill(0)
    
    for (let num of nums1) {
        ar1[num] = 1
    }
    
    for (let num of nums2) {
        ar2[num] = 1
    }
    
    for (let num of nums3) {
        ar3[num] = 1
    }
    
    let obj = [];
    for (let i = 0; i < 101; i++) {
        if (ar1[i] + ar2[i] + ar3[i] >=2){
            
            obj.push(i);
        }
    }
    return obj;
    
};
