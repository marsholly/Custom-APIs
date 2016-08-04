const moment = require('moment');

module.exports = function(birth, res){
  let birthMoment = moment(birth, 'MM-DD-YYYY');
  let age = birthMoment.diff(moment());
  let durationStr = moment.duration(age).humanize(true);
  res.write(`${durationStr}`);
  res.end('\n');

  //comment
}