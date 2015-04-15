var keystone = require('keystone'),
	Message = keystone.list('Message');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'message';
	//locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	locals.data = [];

	view.on('post', { action: 'contact' }, function(next) {
		var application = new Message.model(),
			updater = application.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		
	});

	// Load the current ContactList
	view.on('init', function(next) {
		var q = Message.model.find();
		q.exec(function(err, results) {
			locals.data.messages = results;
			console.log("hello");
			next(err);
		});
	});


	view.render('message', {
		section: 'message',
		
	});
	
}
