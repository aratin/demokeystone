var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Employer = new keystone.List('Employer', {
	autokey: { from: 'name', path: 'key' }
});

Employer.add({
	
	images:{ type: Types.CloudinaryImage,publicID: 'slug'},
	longText: { type: Types.Textarea, initial: true },
	subText :{type:Types.html};
	shortText :{type:Types.html};
	subString:{type:Types.html};
});

/** 
	Registration
	============
*/
Employer.addPattern('standard meta');
Employer.register();