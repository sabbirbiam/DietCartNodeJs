var db = require('./db');
module.exports = {
	getAllProduct: function(callback) {
		var sql = "SELECT * FROM pro";
		db.getData(sql, null ,function(result){
			callback(result);
		});
    },
	insert: function(product, callback){
		var sql = "INSERT INTO pro VALUES (null, ?, ?, ?, ?)";
		db.getData(sql, [product.productname, product.iamge,product.productprice, product.producttype], function(result){
			callback(result);
		});
	},
	update: function(product, callback) {
		var sql = "UPDATE pro SET name=?, price=?, type = ? WHERE id=?";
		db.getData(sql, [product.productname, product.productprice, product.producttype, product.id], function(result){
			callback(result);
		});
	},
	get: function(id, callback){
		var sql = "SELECT * FROM pro WHERE id=?";
		db.getData(sql, [id], function(result){
			callback(result[0]);
		});
	},
	delete: function(id, callback) {
		var sql = "DELETE FROM pro WHERE id=?";
		db.getData(sql, [id], function(result){
			callback(result);
		});
	}
};