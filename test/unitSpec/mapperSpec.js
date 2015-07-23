'use strict';
var should 		= require('should');
var appRoot		= require('app-root-path');
var mapper		= require(appRoot + '/lib/mapper');

describe('#Mapper Unit Tests', function() {
	it('Should create a new object based on an input array', function(done) {
		var config = require(appRoot + '/config/test/mixMasterConfigs/config1');
		var inputObj = {"names": {"first": "testy", "last": "McTesterson"}};
		mapper(inputObj, config, function(err, newObj){
			should.not.exist(err);
			should.deepEqual(newObj, {"customer": {"firstName": "testy", "lastName": "McTesterson"}})

			done();
		});
	});
});