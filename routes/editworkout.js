
var data = require('../exercises.json');
var newExercise = require('../newExercise.json');


exports.view = function(req, res){
  var workout = data.workout[req.params.id];
  var sounds = data.sounds;
  var alt = data.viewAlt;
  res.render('editworkout', {workout: workout, id:req.params.id, sounds:sounds, data: alt});
};

exports.viewAlt = function(req, res){
  var workout = data.workout[req.params.id];
  var sounds = data.sounds;
  res.render('editworkout', {workout: workout, id:req.params.id, sounds:sounds, data: dataViewAlt});  
};

function addnewexercise(){
	console.log(window.document.getElementById('addingExercise').value);

}

exports.edit_curr_exercise = function(req, res){
	var workout = data.workout[req.params.id];
};


