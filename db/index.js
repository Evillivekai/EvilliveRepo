const mysql = require('mysql');

//create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  //my local root pwd: 123
  password: '123',
  database: 'cows_list'
});

connection.connect();
module.exports = connection;