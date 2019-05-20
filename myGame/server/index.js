const express = require('express');
const bodyParser = require('body-parser');
var controllers = require('../database/controllers.js')

const app = express();
const port = 3003;

app.use(bodyParser());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/createAccount', controllers.createAccount);
app.get('/getHeroes/:name', controllers.getAllHeroes);
app.get('/getAccount/:accName', controllers.getAccount);



app.listen(port, () => console.log(`listening on port ${port}`));
