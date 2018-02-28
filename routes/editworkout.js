
var data = require('../exercises.json');
var newExercise = require('../newExercise.json');


exports.view = function(req, res){
  var workout = data.workout[req.params.id];
  res.render('editworkout', {workout: workout});
};

exports.add_new_exercise = function(req, res){
	addnewexercise();
	// console.log(data.workout[req.params.id]);
	// var exercises = data.workout.exercises;
	// exercises.push(newExercise);

};

function addnewexercise(){
	console.log(window.document.getElementById('addingExercise').value);

}

exports.edit_curr_exercise = function(req, res){
	var workout = data.workout[req.params.id];
};