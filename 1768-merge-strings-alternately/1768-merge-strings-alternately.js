/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = '';
    let w = word1;
    let w2 = word2;

if(w.length > w2.length)
{
  for(let i=0; i<w.length; i++)
    {
      merged += w[i];
      if(w2[i])
      {
        merged += w2[i];
      }
    }
}else if(w2.length > w.length)
{
  for(let i=0; i<w2.length; i++)
    {
      if(w[i])
      {
        merged+=w[i];
      }
      merged += w2[i];
    }
}
else if(w.length == w2.length)
{
  for(let i=0; i<w2.length; i++)
    {
      merged += w[i];
      merged += w2[i];
    }
}
    return merged;
    
};