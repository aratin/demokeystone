var _ = require('underscore'),
	keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Users
 * =====
 */

var Message = new keystone.List('Message', {
	// use nodelete to prevent people from deleting the demo admin user
	nodelete: true
});

Message.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	messagesubject: { type: Types.Textarea, initial: true },
	messagetext:{ type: Types.Textarea, initial: true },
	isProtected: { type: Boolean, noedit: false }
});

// new keystone.Email('message').send({
//         //- subject: 'New Enquiry from Yoga Australia Website',
//         //- to: 'name@server.com',
//         //- fromName: 'From Name',
//         //- fromEmail: 'from@server.com',
//         //- }, callback);
/**
 * Registration
 */

Message.addPattern('standard meta');
Message.defaultColumns = 'name, email';
Message.register();
