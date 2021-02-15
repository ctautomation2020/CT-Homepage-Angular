const mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ct-data"
});

con.connect(function(err){
    if(err) throw err;
    console.log("MySql Database Connected");
})

module.exports = con;