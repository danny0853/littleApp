
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//var index = require('./routes/index');
//var users = require('./routes/users');
//var router = require('./route/route');

var route = require('./route/route');





var app = express();



app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');


app.use(bodyParser.json());

//For post method
app.use(bodyParser.urlencoded({extended:false}));



app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(__dirname));


app.use('/',route);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});




