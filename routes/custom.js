/*
 * GET home page.
 */
var data2 = require('../exercises.json');

exports.view = function(req, res){
  res.render('custom', data2);
};