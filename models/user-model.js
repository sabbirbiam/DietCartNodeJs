var db = require('./db');
module.exports = {
	getAll:function(callback){
		var sql = "SELECT * FROM users";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
	getOne:function(callback){
		var sql = "SELECT * FROM users";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
		/*
	insert: function(user, callback){
		var sql = "INSERT INTO users VALUES (null, ?, ?)";
		var param = [user.username, user.password];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	},

	changepassword: function(user, callback){
		var sql = "INSERT INTO users VALUES (null, ?, ?)";
		var param = [user.username, user.password];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	},*/

	get: function(username, callback){
		var sql = "SELECT * FROM user WHERE username=?";
		db.getData(sql, [username], function(result){
			callback(result[0]);
		});
	},
	changepassword: function(password, callback) {
		var sql = "UPDATE user SET password=? WHERE username=?";
		db.getData(sql, [password.newpassword,password.username], function(result){
			callback(result);
		});
	},

	update: function(user, callback) {
		var sql = "UPDATE user SET firstname=?,lastname=?,email=?,username=? WHERE id=?";
		db.getData(sql, [user.firstname, user.lastname,user.email, user.username,user.id], function(result){
			callback(result);
		});
	}
};