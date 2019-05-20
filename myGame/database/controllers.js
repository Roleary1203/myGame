const mysql = require('./index.js');

exports.createAccount = (req,res) => {
	console.log('creating new account')
	let accName = req.body.accName;
	let accPassword = req.body.accPassword.toLowerCase();
	console.log(req.body)
	mysql.db.query(`INSERT INTO player (accountName, password) VALUES ("${accName}", "${accPassword}")`, (err, results) => {
		err ? res.send(err) : res.send(results);
	})
}

exports.getAccount = (req,res) => {
	console.log('retrieving account');
	let accName = req.body.accName;
	let accPassword = req.body.accPassword.toLowerCase();
	console.log(req.body);
	mysql.db.query(`SELECT accountName FROM player WHERE accountName = '${accName}' AND password = '${accPassword}'`, (err, results) => {
		err ? res.send(err) : res.send(results);
	})
}


exports.createHero = (req,res) => {
	console.log('creating new hero')
	let name = req.body.name;
	let role = req.body.role.toLowerCase();
	console.log(req.body)
	mysql.db.query(`INSERT INTO hero (heroName, role) VALUES ("${name}", "${role}")`, (err, results) => {
		err ? res.send(err) : res.send(results);
	})
	
}

exports.getAllHeroes = (req,res) => {
	console.log('getting all Heroes')
	let accName = req.params.accName;
	console.log('current hero', accName)
  mysql.db.query(`SELECT * FROM hero WHERE account_id = (SELECT id FROM player where accountName = '${accName}') `, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
}