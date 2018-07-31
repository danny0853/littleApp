var fs = require('fs');
var path = require('path');


var fileDirectory = path.join(__dirname,'../staticData');


var fileName = 'index.html';


var realPath = path.join(fileDirectory,fileName);

console.log(path.join(fileDirectory,fileName));


var rs = fs.readFileSync(realPath,'utf-8');



exports.route = function(req,res) {
	res.setHeader("Content-Type", "text/html")
	res.send(rs);
}