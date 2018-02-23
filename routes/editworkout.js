
var data = require('../exercises.json');


exports.view = function(req, res){
  var workout = data.workout[req.params.id];
  res.render('editworkout', {workout: workout});
};