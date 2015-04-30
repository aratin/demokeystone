var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Crm = new keystone.List('Crm', {
	autokey: { from: 'name', path: 'key' }
});

Crm.add({
	//consultingService:{type:String},
	image:{ type: Types.CloudinaryImage},
	wysiwygHtml: { type: Types.Html, wysiwyg: false },
	shortWysiwygField: { type: Types.Html, wysiwyg: true, height: 100 },
	html: { type: Types.Html }
});

/** 
	Registration
	============
*/
Crm.addPattern('standard meta');
Crm.register();


