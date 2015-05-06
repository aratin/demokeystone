var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Businessintelligence = new keystone.List('Businessintelligence', {
	autokey: { from: 'name', path: 'key' }
});

Businessintelligence.add({
	image:{ type: Types.CloudinaryImage},
	longText:{ type: String },
	
});

/** 
	Registration
	============
*/
Businessintelligence.addPattern('standard meta');
Businessintelligence.register();
