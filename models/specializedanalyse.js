var keystone = require('keystone'),
	Types = keystone.Field.Types;

var SpecializedAnalyse = new keystone.List('SpecializedAnalyse', {
	autokey: { from: 'name', path: 'key' }
});

SpecializedAnalyse.add({
	specialiseAnyalise:{type:String},
	specialiseimage: {type: Types.CloudinaryImage},
	specialiseAnyalisetext: { type: Types.Textarea, initial: true },
});

/** 
	Registration
	============
*/
SpecializedAnalyse.addPattern('standard meta');
SpecializedAnalyse.register();