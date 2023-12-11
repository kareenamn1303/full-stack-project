const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'myproject',
    password : '262902097678',
    user : 'root',
});

module.exports = connection;

