'use strict';


var assembler = function(configs, obj, callback) {
		
	var mapObj = {};
	var count = 0;
	
	for(var config in configs){
		count++;
		if(configs[config].subStructs)
			for(var sub in configs[config].subStructs){
				if(configs[config].mapType === 'Object'){
					obj[config][configs[config].subStructs[sub]] = obj[configs[config].subStructs[sub]];
				}
				else if(configs[config].mapType === 'Array'){
					var subObj = {};
					subObj[configs[config].subStructs[sub]] =  obj[configs[config].subStructs[sub]];
					obj[config].push(subObj);
				}
			}	
	}
	if(count === Object.keys(configs).length){
		findSubs(configs, obj, function(err, clearedObj) {
			callback(null, clearedObj);	
		})
	}
};

module.exports = assembler;


// findSubs ======================================
//
//================================================
var findSubs = function(configs, obj, callback) {
		var count = 0;
		for(var config in configs){
			count++;
			if(configs[config].subStructs)
				clearSubs(configs[config].subStructs, obj, function(err, res) {
					obj = res;
				});
		}
		if (count === Object.keys(configs).length)
			callback(null, obj);
};

// clearSubs =====================================
//
//================================================
var clearSubs = function(subs, obj, callback){
	var count = 0;
	for(var sub in subs){
		count++;
		delete obj[subs[sub]];
	}	
	if(count === subs.length)
		callback(null, obj);
};