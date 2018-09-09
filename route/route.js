var express = require('express');
var router = express.Router();


var index = require(__dirname + '/index');
var execture = require(__dirname + '/execute');
var aliyun = require(__dirname + '/aliyun');
var vue = require(__dirname + '/vue');

var eliteVideoPlayer = require(__dirname + '/video');

var macauo2o_member = require(__dirname+'/macauo2o/macauo2o_member');


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

router.get('/video',eliteVideoPlayer.api);
router.get('/video/player',eliteVideoPlayer.route);





var macauo2oRouter = express.Router();



macauo2oRouter.get('/',macauo2o_member.index);
macauo2oRouter.post('/mmember',macauo2o_member.result);
macauo2oRouter.get('/checkUser',macauo2o_member.checkUser);
macauo2oRouter.post('/checkUser',macauo2o_member.checkUser);
macauo2oRouter.get('/customerDetail',macauo2o_member.memberDetail);
macauo2oRouter.get('/secondReseller',macauo2o_member.sReseller);
macauo2oRouter.get('/orderFromResller',macauo2o_member.orderFromResller);
macauo2oRouter.get('/orderDetail/:orderNumber' , macauo2o_member.orderDetail);

exports.indexRouter = router;

exports.macauo2oRouter = macauo2oRouter;