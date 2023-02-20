/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let obj = {};
    for(s of sentence)
        {
            if(!obj[s])
                {
                    obj[s] = 1;
                }
        }
    let len = Object.keys(obj).length;
    if(len === 26)
        {
            return true;
        }else{
            return false;
        }
    
};