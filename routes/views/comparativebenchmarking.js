var keystone = require('keystone');
var Comparativebenchmarking = keystone.list('Comparativebenchmarking');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
var CompanyInfoListMenu = keystone.list('CompanyInfoListMenu');
//var Message = keystone.list('Message');


exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'comparativebenchmarking';
		locals.data = [];

	// Load the current Comparativebenchmarking
	view.on('init', function(next) {
		var q = Comparativebenchmarking.model.find();
		q.exec(function(err, results) {
			locals.data.comparativebenchmarkings = results;
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

	// Load the current Message
	// view.on('init', function(next) {
	// 	var q = Message.model.find();
	// 	q.exec(function(err, results) {
	// 		locals.data.messages = results;
	// 		next(err);
	// 	});
	// });
	
	// Render the view
	view.render('comparativebenchmarking');
}