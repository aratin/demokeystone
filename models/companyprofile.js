var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Companyprofile = new keystone.List('Companyprofile', {
	autokey: { from: 'name', path: 'key' }
});

Companyprofile.add({
	companyProfileimage: { type: Types.CloudinaryImage},
	companyProfiletext: {type: String},
	companyProfilesubtext: {type: String},
	companyProfileshortstring: { type: String },
	companyProfilelongstring: { type: String },
	companyProfilesubstring: { type: String },
	companyProfilesubstringtext: { type: String }
});

/** 
	Registration
	============
*/
Companyprofile.addPattern('standard meta');
Companyprofile.register();
