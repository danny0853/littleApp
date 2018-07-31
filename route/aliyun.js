
var aliyun = require('../data/aliyunSignature.js');


var co = require('co');


exports.route = function(req,res) {
	res.render('execute', { title: 'this is a form', message: 'Hello there!'});
};


exports.upload = function(req,res) {
	req.setTimeout(5000000);
var client = aliyun.oss();

	client.useBucket('macauo2o');
	co(function* () { 
	  console.log("start time is : " + new Date(Date.now()).toLocaleString());
	  var r1 = yield client.put('VGA_nVidia_Win10_64_VER2221138284.zip', 'D:/driver/VGA_nVidia_Win10_64_VER2221138284.zip',[{timeout : 600000}]).then(function(data) {
		  console.log('put success: %j', new Date(Date.now()).toLocaleString());
		  res.render('ossResult', { title: 'OSS Result', message: data});
	  });
	 
	  //var r2 = yield client.get('wap.zip');
	  //console.log('get success: %j', r2);
	}).catch(function (err) {
	  console.error('error: %j', err);
	});
	
	
}


exports.accessKey = function(req,res) {
	console.log(aliyun.accessKey);
	res.send('accessKey' + aliyun.accessKey.region);
}