var fs = require('fs');

module.exports.readData = function(data){

};

module.exports.readFromFile = function(path, callback) {
	fs.readFile(path, 'utf-8', function(err, data){
		if(err) {
			console.log(err);
		}

		var toRet = JSON.parse(data);
		//console.log(toRet);
		return callback(data);
	})
}

// 'swifto_android_log_v1.2.9_LIFE PURE_4.2.1_2015_03_14___22_26_12 (1).json'