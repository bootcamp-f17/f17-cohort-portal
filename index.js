var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//   res.send('hello there, you cool person!');
// });

app.use(express.static(__dirname + '/'));


app.listen(3000, function() {
  console.log('I am listening on port 3000!');
});



