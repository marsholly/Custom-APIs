module.exports = function(num1, num2, res){
  let multiply = num1 * num2;
  res.write(`${multiply}`);
  res.end('\n');
}
