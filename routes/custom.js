/*
 * GET home page.
 */
var data = require('../exercises.json');

// exports.view = function(req, res){
//   res.render('custom', data2);
// };

exports.view = function(req, res){
  var workout = data.workout[req.params.id];
  data.viewAlt = false;
  res.render('custom', {workout: workout, data:data.viewAlt});
};

exports.viewAlt = function(request, response){
  var workout = data.workout[request.params.id];
  data.viewAlt = true;
  response.render('custom', {workout: workout, data:data.viewAlt});
};


//category restart action click