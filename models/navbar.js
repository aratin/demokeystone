var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Navbar = new keystone.List('Navbar', {
	autokey: { from: 'name', path: 'key' }
});

Navbar.add({
	LogoPic: {type: Types.CloudinaryImage},
	mailPic: {type: Types.CloudinaryImage},
	mailstring:{type: String},
	contactPic:{type: Types.CloudinaryImage},
	contactstring:{type: String}
});

/** 
	Registration
	============
*/
Navbar.addPattern('standard meta');
Navbar.register();