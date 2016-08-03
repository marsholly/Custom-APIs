module.exports = function(num1, num2, res){
  let sum = num1 + num2;
  res.write(`${sum}`);
  res.end('\n');
}
