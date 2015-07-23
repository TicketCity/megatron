
# [Megatraon](https://en.wikipedia.org/wiki/Megatron)

###### A Transforming tool to map one object to another using a config file.

### Steps to run:
1. Download/clone the module and put into your node_modules folder
2. `npm run install`
3. Go!

### Example
```javascript
var megatron = require('megatron')
var testData = {{your object to test}, 'path/to/your/defs'}
megtron(testData, function(err, res) {
	if(err)
		...do something with your err
	else
		...do something with success message and enjoy life	
});
```