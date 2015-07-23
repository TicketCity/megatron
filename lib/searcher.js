'use strict';
var _	= require('underscore');

var searcher = function(data, name, callback) {

	if(!data || (_.isObject(data) && _.isEmpty(data)))
		callback(new Error("No data was passed into the searcher to search against!"));
	
	if(!name || _.isFunction(name))
		callback(new Error("There was nothing passed in to search for!"));
	
	//if data is an object
	if(!_.isArray(data) && _.isObject(data)){
		if(_.has(data, name))
			return callback(null, data[name]);
			
		else {
			for(var item in data){searcher(data[item], name, callback)}
		}
	}
	
	//if data is an array
	if(_.isArray(data)){
		for(var item in data){searcher(data[item], name, callback)}
	}
	
	if(_.isString(data)){
		if(data === name)
			callback(null, data);
		else
			return;
	}
	
	else
		return;
};

module.exports = searcher;