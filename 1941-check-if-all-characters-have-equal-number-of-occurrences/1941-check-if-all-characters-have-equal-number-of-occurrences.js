/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj = {};
    for(se of s)
        {
            if(obj[se])
                {
                    obj[se] +=1;
                }else{
                    obj[se] = 1;
                }
        }
    
    let res = [];
    for(k in obj)
        {
            res.push(obj[k]);
        }
    
    let l = 0;
    let r = res.length -1;
    
    while(l<=r)
        {
            if(res[l] !== res[r])
                {
                    return false;
                }
            l++;
            r--;
        }
    return true;
};