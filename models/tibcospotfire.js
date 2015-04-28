var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Tibcospotfire = new keystone.List('Tibcospotfire', {
	autokey: { from: 'name', path: 'key' }
});

Tibcospotfire.add({
	longText: { type: String },
	
});

/** 
	Registration
	============
*/
Tibcospotfire.addPattern('standard meta');
Tibcospotfire.register();
