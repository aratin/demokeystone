var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Listingmenu = new keystone.List('Listingmenu', {
	autokey: { from: 'name', path: 'key' }
});

Listingmenu.add({
	softwareProducts:{type:String},
	consulting: {type: String},
	msp: {type: String},
	specialiseAnyalise: {type: String},
	technologyResale: {type: String},
	companyProfile:{type:String},
	mangementTeam:{type:String},
	differentiators:{type:String},
	careers:{type:String},
	contactUs:{type:String},
	partners:{type:String}
});

/** 
	Registration
	============
*/
Listingmenu.addPattern('standard meta');
Listingmenu.register();