/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    let arr = [];
    
    for(let i=0; i<names.length; i++ )
        {
            arr.push([names[i], [heights[i]]]);
        }
    let sort = arr.sort((a,b)=> b[1] - a[1]);
    let sol = arr.map(name => name[0]);
    return sol;
    
    
};