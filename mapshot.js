var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');
var logger = require('morgan');
var app = express();

// all environments
app.set('port', process.env.PORT || 5407);
//app.use('/', express.static(__dirname + '/tiles'));
app.use(logger('dev'));

//main routes
app.get('/mapshot', function(req,res){
	res.sendFile(__dirname + '/mapshot.html');
})

app.get('/mapshot/img/:map/:width/:height/:bbox/', function(req, res){
	console.log(req.params);
	res.json(req.params);
})

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});