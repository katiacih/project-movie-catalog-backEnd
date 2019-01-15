
var moviesController =  require('../src/controllers/moviesController');
var mocks = require('../assets/mocks');
var pathToRegexp = require('path-to-regexp');


module.exports = function(app){

  app.get('/', (req, res) => {
    var m = mocks.list();
    res.render('index', { 'movies': m});
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

}
