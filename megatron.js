'use strict';
var appRoot		= require('app-root-path');
var async		= require('async');
var mapper		= require('./lib/mapper');
var seeker		= require('./lib/seeker');

module.exports = function(inputObj, configPath, callback) {
	async.waterfall([
		//seeker
		function(wfCallback){seeker(configPath, wfCallback)},
		//builder
		function(configs, wfCallback){mapper(inputObj, configs, wfCallback)}
	],
		function(err, obj){
			if(err)
				return callback(err);
			else
				return callback(null, obj);
		}
	)
};