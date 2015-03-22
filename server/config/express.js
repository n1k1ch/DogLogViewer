var express = require('express'),
	stylus = require('stylus');

module.exports = function(app, config) {
	function compileStyl(str, path) {
		return stylus(str).set('filename', path);
	}

	//express properties
	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');

	//middleware
	app.use(stylus.middleware({
		src: config.rootPath + '/public',
		compile: compileStyl
	}));

	app.use(express.static(config.rootPath + '/public'));
}