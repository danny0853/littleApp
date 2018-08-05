var fs = require('fs');
var path = require('path');


var fileDirectory = path.join(__dirname,'../staticData');






function getStaticFileData(sFile , callback) {


	var fileName = sFile;


var data = "aaa";


	var realPath = path.join(fileDirectory,fileName);

	console.log(path.join(fileDirectory,fileName));


	var rs = fs.readFileSync(realPath,'utf-8');


	callback(data);

	return rs;

} 


exports.route = function(req,res) {
	res.setHeader("Content-Type", "text/html");

	var rs  = null;

	

	if(req.query.sFile!=null) {
		rs = getStaticFileData(req.query.sFile, function(data) {
			console.log('callback active : ' + data);

			
		})
	}

	if (rs!=null) {	
		res.send(rs);
	} else {
		res.send('sFile is not null or no  resource file you requested');
	}
}