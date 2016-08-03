const md5= require('md5');

module.exports = function(email, res){
  let hash = md5(email);
  let url = `http://www.gravatar.com/avatar/${hash}`;
  res.write(`<html><body><img src=${url}></img></body></html>`);
  res.end('\n');
}