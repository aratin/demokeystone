var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Crm = new keystone.List('Crm', {
	autokey: { from: 'name', path: 'key' }
});

Crm.add({
	//consultingService:{type:String},
	image:{ type: Types.CloudinaryImage},
	//wysiwygHtml: { type: Types.Html, wysiwyg: false },
	shortWysiwygField: { type: Types.Html, wysiwyg: false, height: 100 },
	html: { type: Types.Html },
	// subText: { type: Types.Html },
	// shortString: { type: Types.Html },
	// shortText: { type: Types.Html },
});

/** 
	Registration
	============
*/
Crm.addPattern('standard meta');
Crm.register();


