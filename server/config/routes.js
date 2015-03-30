var logParser = require('../utils/logParser');

module.exports = function(app) {

	app.get('/partials/*', function(req, res){
		console.log("getting " + req.params[0]);
		res.render('../../public/app/' + req.params[0]);
	});

	app.get('/testLogData', function(req, res) {
		logParser.readFromFile('./server/data/swifto_android_log_v1.2.9_LIFE PURE_4.2.1_2015_03_14___22_26_12 (1).json', function(data){
			res.end(data);
		});
	});

	app.get('*', function(req, res) {
		res.render('index');
	});
}