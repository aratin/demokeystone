var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Predictivemodeling = new keystone.List('Predictivemodeling', {
	autokey: { from: 'name', path: 'key' }
});

Predictivemodeling.add({
	text:{type:String},
	subText:{ type: Types.Textarea, initial: true },
	shortString:{ type: Types.Textarea, initial: true },
	longString:{ type: Types.Textarea, initial: true },
});

/** 
	Registration
	============
*/
Predictivemodeling.addPattern('standard meta');
Predictivemodeling.register();