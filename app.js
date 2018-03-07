/**
 * Module dependencies.
 */
 var jsonfile = require('jsonfile'); 

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var workout = require('./routes/workout');
var settings = require('./routes/settings');
var library = require('./routes/library');
var stats = require('./routes/stats');
var timer = require('./routes/timer');
var add = require('./routes/add');
var custom = require('./routes/custom');
var editworkout = require('./routes/editworkout');

var data = require('./exercises.json');
var newExercise = require('./newExercise.json');
var newWorkout = require('./newWorkout.json');
// Example route
// var user = require('./routes/user');

var app = express();



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/workout', workout.view);
app.get('/settings', settings.view);
app.get('/library', library.view);
app.get('/libraryAlt', library.viewAlt);
app.get('/stats', stats.view);
app.get('/timer', timer.view);
app.get('/add', add.addFriend);
//app.get('/custom', custom.view);
app.get('/custom/:id', custom.view);
app.get('/customAlt/:id', custom.viewAlt);
app.get('/editworkout/:id', editworkout.view);
app.get('/editworkoutAlt/:id', editworkout.viewAlt);
// app.get('/custom/:id', custom.view);


app.post('/library/:viewAlt', function(req, res){
	data.workout.push(newWorkout);
	jsonfile.writeFile('./exercises.json', data, function(err){
		if(err)
			console.error(err);
		if(req.params.viewAlt)
			res.redirect("/libraryAlt");
		else
			res.redirect("/library");
	})
});


app.post('/library/:id/delete', function(req, res){
	console.log("ONO" + req.params.id);
	if(req.params.id == 0)
		data.workout.shift();
	else
		data.workout.splice(req.params.id,1);

	jsonfile.writeFile('./exercises.json', data, function(err){
		if(err)
			console.error(err);
		res.redirect("library");
	})
});


app.post('/editworkout/:id', function(req, res){
	data.workout[req.params.id] = req.body.workout;

	jsonfile.writeFile('./exercises.json', data, function(err){
		if(err)
			console.error(err);
		res.redirect("/editworkout/" + req.params.id);
	})
});


app.post('/editworkout/:id/:exercise/delete', function(req, res){
	data.workout[req.params.id].exercises.splice(req.params.exercise,1);

	jsonfile.writeFile('./exercises.json', data, function(err){
		if(err)
			console.error(err);
		res.redirect("/editworkout/" + req.params.id);
	})
});

app.post('/editworkout/:id/save', function(req, res){
	data.workout[req.params.id] = req.body.workout;
	console.log(req.body.workout);

	jsonfile.writeFile('./exercises.json', data, function(err){
		if(err)
			console.error(err);
		res.redirect("/library");
	})

});



// app.post('/editworkout/4', function(req, res){

// 	console.log(req);	
// 	console.log(req.params);	
// 	console.log(req.params.id);	
// 	jsonfile.writeFile('./exercises.json', data, function(err){
// 		console.error(err);
// 	})
// });


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});