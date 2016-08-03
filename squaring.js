module.exports = function(num1, num2, res){
  let square = Math.pow(num1, 2);
  res.write(`${square}`);
  res.end('\n');
}