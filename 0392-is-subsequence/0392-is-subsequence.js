/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sub = 0;
    for(let i=0; i<t.length; i++)
        {
            if(s[sub] == t[i])
                {
                    sub++;
                }
        }
    if(sub !==s.length)
        {
            return false;
        }else{
            return true;
        }
    
};