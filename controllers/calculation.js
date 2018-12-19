// DECLARATION
var express = require('express');
var router = express.Router();

var asyncValidator = require('async-validator');
var calRules = require.main.require('./validation-rules/calculation');


router.get('/', function(req, res){
	res.render('calculation/index');
});

router.post('/', function(req, res){
    //console.log(req.body);
  
if(req.body.weight !== null && req.body.height !== null)
{
    var input = null;
    //res.send("postd");
    console.log('Dokse');
    var input = {
		weight: req.body.weight,
		height: req.body.height 
	};
    var validator1 = new asyncValidator(calRules.cal);
    validator1.validate(input, function(errors, fields){
		if(errors)
		{
			res.render('calculation/index', {errs: errors});
		}
		else
		{
            var weight = parseInt(req.body.weight);
            var height = parseInt(req.body.height);
            console.log(weight);
            var height1 = weight * .3048;
            var height2 = height * .0254;
            var bmi = (weight) / ((height1 + height2) * (height1 + height2));
            console.log("a1");
            //var bmi = parseInt(bmi);
            console.log(bmi);
            var bmii ={
                bmiii: bmi
            }
            res.render('calculation/index', {val: bmii});

		}
	});
}
// if(req.body.username !== null && req.body.password !== password)
// {
//     //res.send("postd in 2");
//     console.log(req.body);
//     res.send('Different Page');
// }
});

module.exports = router;