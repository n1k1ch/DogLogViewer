var express = require('express'),
	stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}


//express properties
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

//middleware
app.use(stylus.middleware({
	src: __dirname + '/public',
	compile: compile
}));

app.use(express.static(__dirname + '/public'));


require('./server/config/routes')(app);

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + "...");

