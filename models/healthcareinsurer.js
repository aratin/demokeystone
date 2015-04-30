var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Healthcareinsurer = new keystone.List('Healthcareinsurer', {
	autokey: { from: 'name', path: 'key' }
});

Healthcareinsurer.add({
	
	image:{ type: Types.CloudinaryImage},
	longText: { type: Types.Textarea, initial: true },
});

/** 
	Registration
	============
*/
Healthcareinsurer.addPattern('standard meta');
Healthcareinsurer.register();