var db = require('./db');

var validateUser = function(user, callback){
	console.log("a2");
	var sql = "INSERT INTO user VALUES (null, ?, ?, ?, ?, ?)";
	var param = [user.firstname, user.lastname,user.email,user.username,user.password];
	db.getData(sql, param ,function(result){
		if(result == null || result.length == 0)
		{
			//console.log("a3");
			callback(false);
		}
		else
		{
			//console.log("a4");			
			callback(true);
		}

	});
}

module.exports.validateUser = validateUser;
