var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Crm = new keystone.List('Crm', {
	autokey: { from: 'name', path: 'key' }
});

Crm.add({
	//consultingService:{type:String},
	image:{ type: Types.CloudinaryImage},
	wysiwygHtml: { type: Types.Html, wysiwyg: true },
	shortWysiwygField: { type: Types.Html, wysiwyg: true, height: 100 },
	embedSrc: { type: String }
});

/** 
	Registration
	============
*/
Crm.addPattern('standard meta');
Crm.register();


