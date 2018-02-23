/**
 * Module dependencies.
 */
 var jsonfile = require('jsonfile'); 

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var addworkout = require('./routes/addworkout');
var workout = require('./routes/workout');
var settings = require('./routes/settings');
var library = require('./routes/library');
var stats = require('./routes/stats');
var timer = require('./routes/timer');
var add = require('./routes/add.js');
var custom = require('./routes/custom.js');

var data = require('./exercises.json');
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
app.get('/addworkout/:id', addworkout.view);
app.get('/workout', workout.view);
app.get('/settings', settings.view);
app.get('/library', library.view);
app.get('/stats', stats.view);
app.get('/timer', timer.view);
app.get('/add', add.addFriend);
app.get('/custom', custom.view);


app.post('/addworkout', function(req, res){
	console.log(data);
	data.workout.push(req.body);
	jsonfile.writeFile('./exercises.json', data, function(err){
		console.error(err);
		res.send("nancy");
	})
});

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});