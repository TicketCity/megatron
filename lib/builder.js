'use strict';
var _			= require('underscore');
var appRoot 	= require('app-root-path');
var searcher	= require(appRoot + '/lib/searcher');


var builder = function(configs, data, callback){
	if(!data || Object.keys(data).length === 0)
		callback(new Error("No data was passed into Megatron. You will pay for your foolishness!"));
	
	var obj = {};
	var count = 0;
	
	for(var config in configs){
		count++;
		if(configs[config].mapType === 'Object')
			obj[config] = {};
		else if(configs[config].mapType === 'Array')
			obj[config] = [];
		else{	
			searcher(data, configs[config].originName, function(err, found) {
				if(err)
					return callback(err);
				else
					obj[config] = found;
			});
		}
	}
	if(count === _.keys(configs).length)
		callback(null, obj);
	
};

module.exports = builder;

// objectFactory ==================================================
//
//=================================================================
var objectFactory = function(mapType) {
	switch(mapType) {
		case "Object":
			return {};
			break;
		case "Array":
			return [];
			break;
		case "String":
			return "";
			break;
	}
};