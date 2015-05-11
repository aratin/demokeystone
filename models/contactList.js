var _ = require('underscore'),
	keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Users
 * =====
 */

var Contactlist = new keystone.List('Contactlist', {
	// use nodelete to prevent people from deleting the demo admin user
	nodelete: true
});

Contactlist.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true, displayGravatar: true },
	messagesubject: { type: Types.Textarea, initial: true },
	messagetext:{ type: Types.Textarea, initial: true },
	isProtected: { type: Boolean, noedit: false },
});

// // Provide access to Keystone
// Contactlist.schema.virtual('canAccessKeystone').get(function() {
// 	return this.isAdmin;
// });

/**
 * Registration
 */

Contactlist.addPattern('standard meta');
Contactlist.defaultColumns = 'name, email';
Contactlist.register();



// var Email = new keystone.Email('welcome');
// Email.send({
//     subject:'Your  account information',
//     tags:'new user',
//     to:newUser.realEmail,
//     fromName:'Account Team',
//     fromEmail:'support@snowcoins.link',
//     enquiry: {
//         _: require('lodash'),
//         name:newUser.name.first+'  '+newUser.name.last,
//         shareKey:setuser.shareKey,
//         snowcat:newUser.email,
//         email:newUser.realEmail,
//         html:''
//     }
// },function(err,info){
//     //console.log(err,'New user email sent',info);
// });
