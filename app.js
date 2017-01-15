console.log("Listening to server at 3000 !");
var express = require('express');
var app = express();
app.get('/myname', function (req, res) {
  res.send('Hansa!')
})
app.listen(3000, function (){
console.log("I am here");
});