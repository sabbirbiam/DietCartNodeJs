// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var passwordRules = require.main.require('./validation-rules/changePassword');
var updateRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	res.render('home/index', {name: req.session.loggedUser.username});
});

router.get('/changePassword', function(req, res){
	res.render('home/changePassword', {errs: []});
});

router.post('/changePassword', function(req, res){
	var password = {
		oldpassword: req.body.oldpassword,
		newpassword: req.body.newpassword,
		conpassword: req.body.conpassword,
		username   : req.session.loggedUser.username		
	};
	
	
	var validator = new asyncValidator(passwordRules.normal);
	validator.validate(password, function(errors, fields){
		if(errors)
		{
			res.render('home/changepassword', {errs: errors});
		}
		else
		{
			userModel.changepassword(password, function(result){
				res.redirect('/home');	
			});
		}
	});
});

router.get('/update', function(req, res){
	//console.log(req.session.loggedUser);
	var username = req.session.loggedUser.username;
	//var id = req.params.id;
	//console.log(id);
	// var user = {
	// 	firstname: req.session.loggedUser.firstname,
	// 	lastname: req.session.loggedUser.firstname,
	// 	email   : req.session.loggedUser.email,
	// 	username : req.session.loggedUser.username		
	// };
	userModel.get(username, function(result){
		//console.log(result);
		res.render('home/edit', {user: result});
	});
});

router.post('/update', function(req, res){
	console.log( req.body);
	//console.log(req.session.loggedUser.id);
	var user = {
		id       : req.body.id,
		firstname: req.body.firstname,
		lastname : req.body.lastname,
		email    : req.body.email,
		username : req.body.username
	};
	console.log(user.id);
	
	var validator1 = new asyncValidator(updateRules.update);
	validator1.validate(user, function(errors, fields){
		if(errors)
		{
			console.log('jasb');
			res.render('home/edit', {errs: errors});
		}
		else
		{
			name = user.username
			userModel.update(user, function(result){
				res.render('home/index',{name:name});
				//res.send("Done");	
			});
		}
	});
});

router.get('/view', function(req, res){
	//console.log(req.session.loggedUser);
	var username = req.session.loggedUser.username;
	 
	userModel.get(username, function(result){
		//console.log(result);
		res.render('home/view', {user: result});
	});
});
module.exports = router;