module.exports = function(num1,num2, res){
  let cube = Math.pow(num1, 3);
  res.write(`${cube}`);
  res.end('\n');
}