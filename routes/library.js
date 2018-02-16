/*
 * GET home page.
 */

var data1 = require('../data.json');

exports.view = function(req, res){
  res.render('library', data1);
};