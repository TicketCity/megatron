'use strict';
var _			= require('underscore');
var appRoot		= require('app-root-path');
var async		= require('async');
var assembler	= require('./assembler');
var builder 	= require('./builder');
var searcher 	= require('./searcher');

module.exports = function(data, configs, callback) {
	var count = 0;
	var mapObj = {};
	
	async.waterfall([
		//get keys and pass them to find subStructs
		function(wfCallback){
			builder(configs, data, wfCallback);
		},
		//find subStructs
		function(flatObj, wfCallback){
			assembler(configs, flatObj, wfCallback);
		}
	],
		function(err, mapObj){
			if(err)
				callback(err);
			else
				callback(null, mapObj);
		}
	);
	
	
};

// objectFactory ==================================================
//
//=================================================================
var objectFactory = function(mapType, callback) {
	switch(mapType) {
		case "Object":
			callback(null, {});
			break;
		case "Array":
			callback(null, []);
			break;
		case "String":
			callback(null, "");
			break;
	}
};

