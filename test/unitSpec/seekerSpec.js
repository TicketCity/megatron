'use strict';

var appRoot		= require('app-root-path'),
	should		= require('should'),
	seeker	= require(appRoot + '/lib/seeker');
	
describe('#Seeker Unit Testing', function() {
	it('Should return the config file directed by the given filePath', function(done) {
		seeker('config/test/oneConfig', function(err, config) {
			var expected = require(appRoot + '/config/test/oneConfig/config1');
			should.not.exist(err);
			should.deepEqual(expected, config);
			done();
		});
	});
	
	it('Should concat the config files directed by the given filePath', function(done) {
		seeker('config/test/multiConfigs', function(err, config) {
			var expected = {
				"firstName" : {
					"type"		: "[object String]", 
					"iterable"	: false,
					"mapType"	: "string",
					"mapName"	: "name"
				},
				"emailAddr": {
					"type"		: "[object String]", 
					"iterable"	: false,
					"mapType"	: "string",
					"mapName"	: "email"
				}
			};
			should.not.exist(err);
			should.deepEqual(expected, config);
			done();
		});
	});
	
	it('Should return an error for an empty filePath', function(done) {
		seeker('oops', function(err, config) {
			var expected = "Error: The filepath given to Megatron is no good. You will pay for this Prime!";
			err.should.exist;
			err.toString().should.equal(expected);
			done();
		});
	})
});	