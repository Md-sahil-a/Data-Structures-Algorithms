/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let res = 0;
    while(num!==0)
        {
            if(num%2==0)
                {
                    num = num / 2;
                    res++;
                }else
                    {
                        num = num -1;
                        res++;
                    }
        }
    return res;
    
};