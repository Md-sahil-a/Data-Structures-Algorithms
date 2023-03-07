/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
       var leftSum = new Array();
    leftSum[0] = 0;

    var rightSum = new Array();
    rightSum[nums.length-1] = 0;

    var answer = new Array();
    for(var i = 0; i< nums.length ; i++){
        leftSum[i+1] = leftSum[i] + nums[i];
    }
    for(var i = nums.length - 1; i > 0; i--){
        rightSum[i-1] = rightSum[i] + nums[i];
    }

    for(var i = 0; i< nums.length; i++){
        var j = leftSum[i] - rightSum[i];
        if(j > 0){
            answer[i] = j;
        }
        else{
            answer[i] = -1*j;
        }
    }
    return answer;
    
};