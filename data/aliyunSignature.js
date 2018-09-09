var OSS = require('ali-oss');

var aliyunAccount = {
  region: 'oss-cn-shenzhen',
  accessKeyId: 'LTAIQcdYL3guSvLF',
  accessKeySecret: 'tLoFBusdyg4DNK2WtUx9gQ7Dqc58h7',
  bucket: 'macauo2o.oss-cn-shenzhen.aliyuncs.com'
}





exports.oss = function () {
			var client = new OSS({
			  region : aliyunAccount.region,
			  accessKeyId : aliyunAccount.accessKeyId,
			  accessKeySecret : aliyunAccount.accessKeySecret,
			  bucket : aliyunAccount.bucket,
			  timeout : 600000
			  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
			 
			});


			return client;

};


exports.accessKey = aliyunAccount;



