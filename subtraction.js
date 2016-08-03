module.exports = function(num1, num2, res){
  let minus = num1 - num2;
  res.write(`${minus}`);
  res.end('\n');
}
