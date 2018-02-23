/*
 * GET home page.
 */
var data = require('../exercises.json');
var Handlebars = require('handlebars/runtime');


exports.view = function(req, res){
  var workout = data.workout[req.params.id];
  res.render('addworkout', {workout: workout});
};

Handlebars.registerHelper('ifIsZero', function(value, options) {
  if(value === 0) {
    return options.fn(this);
  }
  return options.inverse(this);
});

// function init(){
// 	document.getElementById("addbtn").onclick = function(){
// 			location.href = "addworkout"
// 			var length = Object.keys(data.workout.exercises).length;
// 			var exname = "Exercise Name";
// 			var time = "Time"
// 			var unit = "Unit"
// 			var sound = "Sound"
// 			data.workout.exercises[length] = {exname, time, unit, sound};
// 	};
// } 
