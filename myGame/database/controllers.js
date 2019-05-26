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
	let accInfo = JSON.parse(req.params.accInfo);
	let accName = accInfo.accName;
	let accPassword = accInfo.accPassword;
	console.log('WORK?',accInfo);
	mysql.db.query(`SELECT accountName FROM player WHERE accountName = '${accName}' AND password = '${accPassword}'`, (err, results) => {
		err ? res.send(err) : res.send(results);
	})
}


exports.createHero = (req,res) => {
	console.log('creating new hero')
	let name = req.body.name;
	let role = req.body.role.toLowerCase();
	let acc = req.body.acc;
	console.log(req.body)
	mysql.db.query(`INSERT INTO hero (heroName, role, account_id) VALUES ("${name}", "${role}", (SELECT id FROM player WHERE accountName = "${acc}"))`, (err, results) => {
		err ? res.send(err) : res.send(results);
	})
	
}

exports.getAllHeroes = (req,res) => {
	console.log('getting all Heroes')
	//console.log(req)
	let accName = req.params.accName;
	console.log('getting heroes for ', accName)
  mysql.db.query(`SELECT * FROM hero WHERE account_id = (SELECT id FROM player where accountName = '${accName}') `, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
}