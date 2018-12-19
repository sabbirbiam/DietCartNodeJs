// Declaration
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var login = require('./controllers/login');
var home = require('./controllers/home');
var logout = require('./controllers/logout');
var create = require('./controllers/create');
var calculation = require('./controllers/calculation');
var admin = require('./controllers/admin');

 
var port = 1337;

// Configure
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'My top secret key', saveUninitialized: true, resave: false}));

// Static
 

// Route
app.get('*', function(req, res, next){
	if(req.url == '/' || req.url == '/login'||req.url == '/create' ||req.url == '/calculation')
	{
		next();
		return;
	}

	if(req.session.loggedUser == null)
	{
		res.redirect('/login');
		return;
	}
	next();
});

app.get('/', function(req, res){
	res.redirect('/login');
});

app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/create', create);
app.use('/calculation', calculation);
app.use('/admin', admin);

// Server startup
app.listen(port, function(){
	console.log('Server started at port ' + port);
});