var keystone = require('keystone'),
	Contactlist = keystone.list('Contactlist'),
	Navbar = keystone.list('Navbar'),
    MenuList = keystone.list('Menu'),
	FooterList = keystone.list('Footer'),
    CompanyInfoListMenu = keystone.list('CompanyInfoListMenu'),
   //- Message = keystone.list('Message');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;
	
		locals.section = 'contactlist';
		locals.formData = req.body || {};
		locals.validationErrors = {};
		locals.enquirySubmitted = false;
		locals.data = [];
		
	view.on('post', { action: 'contact' }, function(next) {
		var application = new Contactlist.model(),
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
		var q = Contactlist.model.find();
		q.exec(function(err, results) {
			locals.data.contactlists = results;
			next(err);
		});
	});

	// Load the current Navbar
	view.on('init', function(next) {
		var q = Navbar.model.find();
		q.exec(function(err, results) {
			locals.data.navbars = results;
			next(err);
		});
	});

	// Load the current MenuList
	view.on('init', function(next) {
		var q = MenuList.model.find();
		q.exec(function(err, results) {
   			locals.data.menus = results;
			next(err);
		});
	});

	// Load the current FooterList
	view.on('init', function(next) {
		var q = FooterList.model.find();
		q.exec(function(err, results) {
   			locals.data.footers = results;
			next(err);
		});
	});

	// Load the current CompanyInfoListMenu
	view.on('init', function(next) {
		var q = CompanyInfoListMenu.model.find();
		q.exec(function(err, results) {
			locals.data.companyinfolistmenus = results;
			next(err);
		});
	});

	// // Load the current Message
	// view.on('init', function(next) {
	// 	var q = Message.model.find();
	// 	q.exec(function(err, results) {
	// 		locals.data.messages = results;
	// 		next(err);
	// 	});
	// });

	// Render the view
	view.render('contactlist', {
		section: 'contactlist',
	});
	
}
