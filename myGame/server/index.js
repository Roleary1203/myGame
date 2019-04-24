const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`listening on port ${port}`));
