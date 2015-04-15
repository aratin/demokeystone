var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Greate = new keystone.List('Greate', {
	autokey: { from: 'name', path: 'key' }
});

Greate.add({
	firstName: { type: String },
	lastName: { type: String },
	profilePic: {type: String},
	nationality: { type: String, default: 'India' }
});

Greate.addPattern('standard meta');
Greate.register();
