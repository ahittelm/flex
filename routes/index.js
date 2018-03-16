// var data = require('../exercises.json');
// var newExercise = require('../newExercise.json');


// exports.view = function(req, res){
//   var workout = data.workout[req.params.id];
//   var sounds = data.sounds;
//   var alt = data.viewAlt;
//   res.render('editworkout', {workout: workout, id:req.params.id, sounds:sounds, data: alt});
// };

/*
 * GET home page.
 */
var login = require('../login.json');

exports.view = function(req, res){
  var login2  = login.account;
  console.log(login2);
  res.render('index', {login : login2});
};

// customAlt.view = function(req, res){
//   res.render('index', login);
// };


function submitClicked() {
	// your code here
	$("#submit").click(function () {
		console.log(login.account);
	});
}
