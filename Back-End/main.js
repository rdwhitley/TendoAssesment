const express = require('express');
const writeToFile = require('./methods/WriteToFile');

const app = express();

app.use(express.json())
app.post('/recordResponse', writeToFile)

app.listen(3001, function () {
    console.log('app listening on port 3001.');
});
