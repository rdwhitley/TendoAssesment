const express = require('express');
const cors = require('cors');
const writeToFile = require('./methods/WriteToFile');

const app = express();

app.use(express.json())
app.use(cors())
app.post('/recordResponse', writeToFile)

app.listen(3001, function () {
    console.log('app listening on port 3001.');
});
