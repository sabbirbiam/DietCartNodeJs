var passwordValidator = require('password-validator');


module.exports = {
        cal:{
            weight: {required: true, max:6, pattern:("^[0-9]*$")},
            height: {required: true, max:6, pattern:("^[0-9]*$")}
        } 
    };