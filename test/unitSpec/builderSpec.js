'use strict';
var appRoot 	= require('app-root-path');
var should 		= require('should');
var assembler	= require(appRoot + '/lib/assembler');
var builder		= require(appRoot + '/lib/builder');

describe('#Builder Unit Tests', function() {
	it('Should return a flat build object', function(done) {
		var config 	= require(appRoot + '/config/test/mixMasterConfigs/config1');
		var data 	= {"names": {"first": "testy", "last": "McTesterson"}};
		builder(config, data, function(err, res) {
			should.not.exist(err);
			should.deepEqual(res, {"customer": {}, "firstName": "testy", "lastName": "McTesterson"})
			done();
		});
	});
});

describe('#Assembler Unit Tests', function() {
	it('Should return an assembled map object', function(done) {
		var config 	= require(appRoot + '/config/test/mixMasterConfigs/config1');
		var data 	= {"customer": {}, "firstName": "testy", "lastName": "McTesterson"};
		assembler(config, data, function(err, res) {
			should.not.exist(err);
			should.deepEqual(res, {"customer": {"firstName": "testy", "lastName": "McTesterson"}});
			done();
		});
	});
});