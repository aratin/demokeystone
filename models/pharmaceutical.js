var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Pharmaceutical = new keystone.List('Pharmaceutical', {
	autokey: { from: 'name', path: 'key' }
});

Pharmaceutical.add({
	
	images:{ type: Types.CloudinaryImage,publicID: 'slug'},
	longText: { type: Types.Textarea, initial: true },
});

/** 
	Registration
	============
*/
Pharmaceutical.addPattern('standard meta');
Pharmaceutical.register();