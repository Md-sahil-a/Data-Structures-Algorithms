/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for(let i=0; i<words.length; i++)
        {
            if(palin(words[i]))
                {
                    return words[i];
                }
        }
    return "";
    
};


let palin = (s) =>{
    let l = 0;
    let r = s.length -1;
    while(l<r)
        {
            if(s[l] !== s[r])
                {
                    return false;
                }
            l++;
            r--;
        }
    return true;
}