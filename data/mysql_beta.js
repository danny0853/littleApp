var mysql = require('mysql');


/*
var pool = mysql.createPool({
	  connectionLimit : 10,
	  host     : '',
	  user     : '',
	  port	   : '',
	  password : '',
	  database : ''
	});	
*/

var DB = (function () {

    function _query(query, params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                callback(null, err);
                throw err;
            }

            connection.query(query, params, function (err, rows) {
            	console.log(query);
                connection.release();
                if (!err) {
                    callback(rows,err);
                }
                else {
                    callback(null, err);
                }

            });

            connection.on('error', function (err) {
                connection.release();
                callback(null, err);
                throw err;
            });
        });
    };

    return {
        query: _query
    };
})();

module.exports = DB;