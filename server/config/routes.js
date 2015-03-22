module.exports = function(app) {

	app.get('/partials/*', function(req, res){
		console.log("getting " + req.params[0]);
		res.render('../../public/app/' + req.params[0]);
	});

	app.get('/test', function(req, res) {
		res.send('<h2>Hie from test</h2>');
	});

	app.get('*', function(req, res) {
		res.render('index');
	});
}