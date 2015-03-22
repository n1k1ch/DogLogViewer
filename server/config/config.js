var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/dogLogViewer'
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://localhost/dogLogViewer'
	}
}