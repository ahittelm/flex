var login = require('../login.json');

exports.view = function(req, res){
  var login2  = login.account;
  console.log(login2);
  res.render('signup', {login : login2});
};