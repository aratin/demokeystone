var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Marketresearch = new keystone.List('Marketresearch', {
	autokey: { from: 'name', path: 'key' }
});

Marketresearch.add({
	longText: { type: String },
	
});

/** 
	Registration
	============
*/
Marketresearch.addPattern('standard meta');
Marketresearch.register();
