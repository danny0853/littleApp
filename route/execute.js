var exec = require('child_process');


var mysql = require('../data/testing');


exports.route = function(req,res) {
	res.render('execute', { title: 'this is a form', message: 'Hello there!'});
};

exports.commandExec = function(req,res) {
	console.log('field 5 : ' + req.body.field5);
	console.log('field 3 : ' + req.body.field3);
	
	exec.exec(req.body.field5,function(error,stderr,stdout) {
		console.log(stderr);
	});
	
	res.render('ePost', {title : 'this is post form'});
};