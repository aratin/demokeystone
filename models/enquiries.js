var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: "Just leaving a message" },
		{ value: 'question', label: "I've got a question" },
		{ value: 'other', label: "Something else..." }
	], required: true },
	message: { type: Types.Textarea, required: true },
	timestamp: { type: Date, default: Date.now, noedit: true }
});

Enquiry.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {
	
	if ('function' !== typeof callback) {
		callback = function() {};
	}
	
	var enquiry = this;
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
		
		if (err) return callback(err);
		
		new keystone.Email('enquiry-notification').send({
			to: admins,
			from: {
				name: 'visintelproject',
				email: 'arati.nankar@planetria.com'
			},
			subject: 'New Enquiry for visintelproject',
			enquiry: enquiry
		}, callback);
		
	});
	
};
Enquiry.addPattern('standard meta');
Enquiry.defaultSort = '-timestamp';
Enquiry.defaultColumns = 'name, email, enquiryType, timestamp';
Enquiry.register();
