/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
      let count = 0;

     for (let i = 0; i < String(num).length; i++) {
        if (num % Number(String(num)[i]) === 0) count++
    }

    return count;
};