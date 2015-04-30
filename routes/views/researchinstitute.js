var keystone = require('keystone');
var Researchinstitute = keystone.list('Researchinstitute');
var Listingmenu = keystone.list('Listingmenu');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
//var Message = keystone.list('Message');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'researchinstitute';
		locals.data = [];

	// Load the current Researchinstitute
	view.on('init', function(next) {
		var q = Researchinstitute.model.find();
		q.exec(function(err, results) {
			locals.data.researchinstitutes = results;
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

	// Load the current ListingMenu
	view.on('init', function(next) {
		var q = Listingmenu.model.find();
		q.exec(function(err, results) {
			locals.data.listingmenus = results;
			next(err);
		});
	});

	// Load the current Message
	// view.on('init', function(next) {
	// 	var q = Message.model.find();
	// 	q.exec(function(err, results) {
	// 		locals.data.messages = results;
	// 		console.log("hello");
	// 		next(err);
	// 	});
	// });
	// Render the view
	view.render('researchinstitute');
}