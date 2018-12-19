// Declaration
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var adminModel = require.main.require('./models/admin-model');

 
// Request Handler

router.get('/delete/:id', function(req, res){
	//console.log(req.session.loggedUser);
	var id = req.params.id;
	console.log(id);
	 
	adminModel.delete(id, function(result){
		console.log(result);
		adminModel.getAllProduct(function(result){
			//console.log(result);
			res.render('admin/admin', {
				user: req.session.loggedUser,
				productList: result
			});
		});
	});
});
router.get('/view/:id', function(req, res){
	//console.log(req.session.loggedUser);
	var id = req.params.id;
	 
	adminModel.get(id, function(result){
		//console.log(result);
		res.render('admin/view', {product: result});
	});
});
router.get('/edit/:id', function(req, res){
	var id = req.params.id;
	adminModel.get(id, function(result){
		res.render('admin/edit', {product: result});
	});

});

router.post('/edit/:id', function(req, res){
	adminModel.update(req.body, function(result){
		res.redirect('/admin');
	});

});
router.get('/add', function(req, res){
	res.render('admin/add');
});

router.post('/add', function(req, res){
	adminModel.insert(req.body, function(result){
		res.redirect('/admin');
	})
});

router.get('/', function(req, res){ 
	adminModel.getAllProduct(function(result){
		//console.log(result);
		res.render('admin/admin', {
			user: req.session.loggedUser,
			productList: result
		});
	});
});





// Export (mandatory)
module.exports = router;