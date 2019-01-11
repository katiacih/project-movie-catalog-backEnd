module.exports = function(){
  var express = require('express');


  var app = express();
  
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.post('/', function (req,res){
    res.send('Got a POST request');
  });

  app.put('/movie', function(req, res){
    res.send('Got a PUT request at /movie')
  });

  app.delete('/movie',function(req,res){
    res.send('Got a DELETE request at /movie')
  });


  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
};
