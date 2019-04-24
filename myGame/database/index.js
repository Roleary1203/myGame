const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'myGame'
});

db.connect(err => err ? console.log(err) : console.log('db connected'));

module.exports = { db }

