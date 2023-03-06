/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let res = 0;
     for (let arr of grid) {
    arr.sort((a, b) => b - a);
  }
  for (let i = 0; i < grid[0].length; i++) {
    let max = -Infinity;
    for (let arr of grid) {
      max = Math.max(max, arr[i]);
    }
    res += max;
  }
  return res;
    
};