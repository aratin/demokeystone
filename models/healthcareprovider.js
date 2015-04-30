var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Healthcareprovider = new keystone.List('Healthcareprovider', {
	autokey: { from: 'name', path: 'key' }
});

Healthcareprovider.add({
	
	images:{ type: Types.CloudinaryImage,publicID: 'slug'},
	longText: { type: Types.Textarea, initial: true },
});

/** 
	Registration
	============
*/
Healthcareprovider.addPattern('standard meta');
Healthcareprovider.register();