

var express = require('express');
var router = express.Router();


var index = require(__dirname + '/index');
var execture = require(__dirname + '/execute');
var aliyun = require(__dirname + '/aliyun');
var vue = require(__dirname + '/vue')



router.use(function timeLog(req, res, next) {
	  console.log('Time: ', Date.now());
	  next();
});







router.get('/',index.route);

router.get('/exec',execture.route);

router.post('/exec', execture.commandExec);

router.get('/aliyun', aliyun.upload);


router.get('/key',aliyun.accessKey);



router.get('/vue',vue.route);



module.exports = router;