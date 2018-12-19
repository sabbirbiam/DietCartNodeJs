// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/', function(req, res){
	
	req.session.destroy();
	res.redirect('/login');
});

// Export (mandatory)
module.exports = router;