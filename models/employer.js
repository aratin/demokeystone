var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Employer = new keystone.List('Employer', {
	autokey: { from: 'name', path: 'key' }
});

Employer.add({
	
	images:{ type: Types.CloudinaryImage,publicID: 'slug'},
	longText: { type: Types.Textarea, initial: true },
	
});

/** 
	Registration
	============
*/
Employer.addPattern('standard meta');
Employer.register();