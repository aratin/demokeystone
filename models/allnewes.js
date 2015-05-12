var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Allnewes = new keystone.List('Allnewes', {
	autokey: { from: 'name', path: 'key' }
});

Allnewes.add({
	image: { type: Types.CloudinaryImage},
	date:{type: Date},
	newsText: { type: String },
	
});

/** 
	Registration
	============
*/
Allnewes.addPattern('standard meta');
Allnewes.register();
