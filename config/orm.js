const connection = require("./connection.js");

var orm = {
    selectAll:  function(tableInput){
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    };

    insertOne: function(tableInput, userChoice){
        var queryString = "INSERT INTO ?? ( ??, ??) Values (?,?)"
        connection.query(queryString, [id, tableInput, userChoice], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};


module.exports = orm;