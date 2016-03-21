'use strict';
var express = require('express');
var request = require('request');
var app = express();

app.use(express.static(__dirname));

app.use('/api', function( req, res ) {
  	var url = 'http://localhost:8055'+ req.url;
	var r = null;
	
	switch (req.method) {
		case 'POST':
			r = request.post( { uri: url, json: req.body } );
			break;
		case 'PATCH':
			r = request.patch( { uri: url, json: req.body } );
			break;
		case 'PUT':
			r = request.put( { uri: url, json: req.body } );
			break;
		case 'DELETE':
			r = request.del( { uri: url } );
			break;
		default:
			r = request(url);
			break;
	}

	req.pipe(r).pipe(res);
});

app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/static/index.html');
});


app.listen(1337);