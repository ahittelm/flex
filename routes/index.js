/*
 * GET home page.
 */
var login = require('../login.json');

exports.view = function(req, res){
  res.render('index', login);
};

// customAlt.view = function(req, res){
//   res.render('index', login);
// };


function submitFBClicked() {
	// your code here
	$("#submit").click(function () {
		console.log(login.account);
	});
}

function submitClicked() {
	// your code here
	$("#submit").click(function () {
		console.log(login.account);
	});
}
