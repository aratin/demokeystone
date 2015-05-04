var keystone = require('keystone');
var Businessintelligence = keystone.list('Businessintelligence');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
var Consultingservicesubmenu = keystone.list('Consultingservicesubmenu');
//var Message = keystone.list('Message');


exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'businessintelligence';
		locals.data = [];

	// Load the current Businessintelligence
	view.on('init', function(next) {
		var q = Businessintelligence.model.find();
		q.exec(function(err, results) {
			locals.data.businessintelligences = results;
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

	// Load the current Consultingservicesubmenu
	view.on('init', function(next) {
		var q = Consultingservicesubmenu.model.find();
		q.exec(function(err, results) {
			locals.data.consultingservicesubmenus = results;
			next(err);
		});
	});
	// Load the current Message
	// view.on('init', function(next) {
	// 	var q = Message.model.find();
	// 	q.exec(function(err, results) {
	// 		locals.data.messages = results;
	// 		next(err);
	// 	});
	// });
	
	// Render the view
	view.render('businessintelligence');
}