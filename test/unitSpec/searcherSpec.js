'use strict';
var should 		= require('should');
var appRoot		= require('app-root-path');
var searcher	= require(appRoot + '/lib/searcher');

describe('#Searcher Unit Tests', function() {
	it('Should return data based on input and name', function(done) {
		var inputObj = {"names": {"first": "testy", "last": "McTesterson"}, "stuff" : [{"one" : 1}, {"two": 2}] };
		searcher(inputObj, "last", function(err, res) {
			should.not.exist(err);
			res.should.equal("McTesterson");
			done();
		});
	});
	
	it('Should return an error with no object passed in.', function(done) {
		var inputObj = undefined;
		searcher({}, "last", function(err, res) {
			should.exist(err);
			err.toString().should.equal("Error: No data was passed into the searcher to search against!");
			done();
		});
	});
});