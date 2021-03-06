var MongoClient = require('mongodb').MongoClient;

var open = (function () {
	var db = null;
	var connectionStatus = 0;
	var callbacks = [];
	console.log(1);
	return function (cb) {
		if(db) {
			if(typeof(cb) == 'function') {
				cb(db);
			} else {
				console.log(cb + ' not a function pass [system/mongo/init.js]');
			}
		} else {
			cb && callbacks.push(cb);
			if(!connectionStatus) {
				var url = 'mongodb://localhost:27017/';
				MongoClient.connect(url, function (err, _db) {
					// _db.authenticate('hy','hy@*(!)@&', function (err, result) {
						console.log('err',err);
						console.log('Connected correctly to server [system/mongo/init.js]');
						var _cb = callbacks.shift();
						while (_cb) {
							if(typeof(_cb) == 'function') {
								_cb(_db);
							} else {
								console.log(_cb + 'not a function pass [system/mongo/init.js]');
							}
							_cb = callbacks.shift();
						}
						db = _db;
						connectionStatus = 2;
					// });
				});
				connectionStatus = 1;
			}
		}
	}
})();

exports.open = open;