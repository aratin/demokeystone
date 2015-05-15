var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Readmore = new keystone.List('Readmore', {
	autokey: { from: 'name', path: 'key' }
});

Readmore.add({
	image:{ type: Types.CloudinaryImage},
	longText: { type: String },
	
});

/** 
	Registration
	============
*/
Readmore.addPattern('standard meta');
Readmore.register();
