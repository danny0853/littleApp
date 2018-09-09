


 var DB = require(__dirname + '/../data/mysql_beta.js');




exports.get = function(sql,params, callback) {
  DB.query(sql,params, function(data, err) {
    callback(data, err);
  });
}

