var passwordValidator = require('password-validator');

var schema = new passwordValidator();

schema
.is().min(8)                                     
.is().max(20)                              
.has().lowercase()                              
.has().digits()                                  
.has().not().spaces()                             
.is().not().oneOf(['Passw0rd', 'Password123']);  

module.exports = {
        normal:{
            oldpassword: {required: true},
            newpassword: {required: true , min: 8,},
            conpassword: {required: true,  min: 8}
        },
        valid:{
            
        }
    };