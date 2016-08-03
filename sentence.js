module.exports = function(sentence, res){
  let code = decodeURI(sentence);
  //Word count
  let wordCount = code.match(/[a-z]+/gi).length;
  //Character count
  let charCount = code.match(/\S/g).length;
  //Average word length
  let arr = code.match(/[a-z]+/gi);

  let average = ( arr.reduce((sum, next)=>{  return sum += next; }, "").length ) / wordCount;
  res.write(`The word count is ${wordCount}; The Character count is ${charCount}; The average word length is ${average}`);
  res.end('\n');
}