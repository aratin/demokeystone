var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Lawenforcement = new keystone.List('Lawenforcement', {
	autokey: { from: 'name', path: 'key' }
});

Lawenforcement.add({
	text: {type: Types.Textarea, initial: true },
	image: {type:Types.CloudinaryImage},
	shortText: {type:String },
	subImage: {type:Types.CloudinaryImage},
	longText: {type: Types.Textarea, initial: true },
	shortSubText: {type:String },
	longSubText: {type: Types.Textarea, initial: true },
/** 
	Registration
	============
*/
Lawenforcement.addPattern('standard meta');
Lawenforcement.register();
