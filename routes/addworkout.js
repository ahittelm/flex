/*
 * GET home page.
 */
var data = require('../exercises.json');

exports.view = function(req, res){
  res.render('addworkout', data);
};
