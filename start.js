var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('hit');
  res.sendFile('C:/Users/micurd/Projects/flatlanders/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});