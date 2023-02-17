/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let mymaxArea = 0;
    let s = 0;
    let e = height.length -1;
    while( s < e){
        let l = Math.min(height[s], height[e]);
        let w = e - s;
        let a = l * w;
        mymaxArea = Math.max(a,mymaxArea);
        if(height[s] <= height[e]){
            s++;
        }else{
            e--;
        }
    }
    return mymaxArea;
    
};