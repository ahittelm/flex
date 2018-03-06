/*
 * GET home page.
 */

var data1 = require('../exercises.json');

exports.view = function(req, res){
  data1.workout.viewAlt = false;
  res.render('library', {workout: data1.workout, data:data1.workout.viewAlt});
};

exports.viewAlt = function(request, response){
  data1.workout.viewAlt = true;
  response.render('library', {workout: data1.workout, data:data1.workout.viewAlt}); 
};


