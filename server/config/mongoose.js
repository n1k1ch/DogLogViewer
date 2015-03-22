var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);

	var logEntrySchema = mongoose.Schema({
		Date: {type: Date},
		Message: {type: String},
		Severity: {type: String},
		Type: {type: String}
	});

	var logSchema = mongoose.Schema({
		version: {type: String},
		phoneModel: {type: String},
		androidVer: {type: String},
		date: {type: Date},
		entries:{type: [LogEntry]}
	});

	var LogEntry = mongoose.model('LogEntry', logEntrySchema);
	var Log = mongoose.model('Log', logSchema);

	Log.find({}).exec(function(err, collection){
		if(err) {
			console.log(err);
		}
		
		console.log(collection);
	});
};