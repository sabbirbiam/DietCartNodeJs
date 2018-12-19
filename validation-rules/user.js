module.exports = {
	create: {
		firstname:{type: 'string', required: true, max: 15},
		lastname: {type: 'string', required: true, max: 15},
		email   : {type: 'string', required: true, pattern:("[^ @]*@[^ @]*")},
		username: {type: 'string', required: true, max: 15},
		password: {type: 'string', required: true, min: 6,}
	},
	update:
	{
		firstname: {required: true, max: 15, pattern:("/<(?:.|\n)*?>/gm, ''")},
		lastname : {required: true, max: 15, },
		email    : { required: true, pattern:("[^ @]*@[^ @]*")},
		username : { required: true, max: 15,  pattern:("/<(?:.|\n)*?>/gm, ''")}
	}
};