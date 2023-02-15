/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let indexToFind = nums.length -k;
    quick(nums, 0, nums.length -1);
    return nums[indexToFind];
    
};


let quick = (arr, left, right)=>{
    if(left < right)
        {
            let partitionIndex = Partition(arr, left, right);
            quick(arr, left, partitionIndex -1);
            quick(arr, partitionIndex +1, right);
        }
    
}


let Partition = (arr,left,right)=>{
    
    let piviot = arr[right];
    let i = left;
    for(let j=left; j<right; j++)
        {
            if(arr[j] < piviot)
                {
                  swap(arr,i,j);
                    i++;
                }
        }
    swap(arr,i,right);
    return i;
}

let swap = (arr,i,j) =>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}