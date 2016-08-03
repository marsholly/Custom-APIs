module.exports = function(num1, num2, res){
  let div;
  if(num2 !== 0){
    div = num1 / num2;
  }else{
    div = 'err';
  }
  res.write(`${div}`);
  res.end('\n');
}
