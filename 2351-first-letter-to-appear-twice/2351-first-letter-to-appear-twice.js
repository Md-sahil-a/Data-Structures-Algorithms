/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let obj = {};
    for(se of s)
        {
            if(obj[se])
                {
                    return se;
                }else{
                    obj[se] = 1;
                }
        }
    
};