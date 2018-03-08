/*
 * GET home page.
 */

var data1 = require('../exercises.json');

exports.view = function(req, res){
  res.render('tutorial', data1);
};
