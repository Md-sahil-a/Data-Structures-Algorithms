/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let paren = {
        '(':')',
        '{':'}',
        '[':']',
    }
    let stk = [];
    for(let i=0; i<s.length; i++)
        {
            if(paren[s[i]])
                {
                    stk.push(s[i]);
                }else{
                    let leftbracket = stk.pop();
                    let correctbracket = paren[leftbracket];
                    if(s[i] !== correctbracket) return false;
                }
        }
    return stk.length ===0;
    
};