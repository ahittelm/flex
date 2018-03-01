/*
 * GET home page.
 */
var data2 = require('../exercises.json');

// exports.view = function(req, res){
//   res.render('custom', data2);
// };

exports.view = function(req, res){
  var workout = data2.workout[req.params.id];
  res.render('custom', {workout: workout});
};

exports.viewAlt = function(request, response){
	custom.viewAlt = true;
  	response.render('custom', {workout: workout});
};