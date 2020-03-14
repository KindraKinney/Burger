var connection = require(".../config/connection.js");
 
var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM" + table + ";";

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }        
            cb(res);
        });
    }    
};