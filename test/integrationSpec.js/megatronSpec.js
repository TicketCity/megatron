var appRoot		= require('app-root-path');
var megatron	= require(appRoot + '/megatron');
var should		= require('should');

describe('#Megtron Integration testing', function() {
	it('Should create a good object', function(done) {
		var data 		= {"names": {"first": "testy", "last": "McTesterson"}, "address": [{"city": "Testville"}]};
		var expected 	= {"customer": {"name": {"firstName": "testy", "lastName": "McTesterson"}, "address": [{"city": "Testville"}]}};
		megatron(data, 'config/test/complexConfigs', function(err, map) {
			should.not.exist(err);
			should.deepEqual(map, expected);
			done();
		});
		
	});
	
	it('Should return an error for a bad path', function(done) {
		var data = {"names": {"first": "testy", "last": "McTesterson"}, "address": [{"city": "Testville"}]};
		megatron(data, 'bad/path', function(err, map) {
			should.exist(err);
			err.toString().should.equal("Error: The filepath given to Megatron is no good. You will pay for this Prime!");
			done();
		});
		
	});
	
	it('Should return an error for an data object', function(done) {
		var data = {};
		megatron(data, 'config/test/complexConfigs', function(err, map) {
			should.exist(err);
			err.toString().should.equal("Error: No data was passed into Megatron. You will pay for your foolishness!");
			done();
		});
		
	});
		
})
