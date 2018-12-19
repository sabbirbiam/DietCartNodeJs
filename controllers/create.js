// Declaration
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var createModel = require.main.require('./models/create-model');
var createRules = require.main.require('./validation-rules/user');
// Request Handler
router.get('/', function(req, res){ 
	 res.render('create/create', {errs: []});
});

router.post('/', function(req, res){
	//res.render('create/create');
	//res.send("posted");
	//console.log();
//	res.send(req.body.capital);

	var user = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email:req.body.email,
		username: req.body.username,
		password: req.body.password
	};

	var validator = new asyncValidator(createRules.create);
	validator.validate(user, function(errors, fields){
		if(errors)
		{
			res.render('create/create', {errs: errors});
		}
		else
		{
			createModel.validateUser(user, function(result){
				//console.log("a1");
				res.redirect('/login');
			});
		}
	});

	

});


// Export (mandatory)
module.exports = router;