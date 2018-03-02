
var data = require('../exercises.json');
var newExercise = require('../newExercise.json');


exports.view = function(req, res){
  var workout = data.workout[req.params.id];
  var sounds = data.sounds;
  var dataViewAlt = !data.viewAlt;
  res.render('editworkout', {workout: workout, id:req.params.id, sounds:sounds, data: dataViewAlt});
};

exports.viewAlt = function(req, res){
  var workout = data.workout[req.params.id];
  var sounds = data.sounds;
  var dataViewAlt = !data.viewAlt;
  res.render('editworkout', {workout: workout, id:req.params.id, sounds:sounds, data: dataViewAlt});  
};

function addnewexercise(){
	console.log(window.document.getElementById('addingExercise').value);

}

exports.edit_curr_exercise = function(req, res){
	var workout = data.workout[req.params.id];
};


