var _ = require('underscore'),
	keystone = require('keystone'),
	importRoutes = keystone.importer(__dirname);

function restrictToAdmins(req, res, next) {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.redirect('/signin');
	}
}

keystone.pre('routes', function(req, res, next) {
	
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'Company info', key: 'company', href: '/#' },
		{ label: 'Offering', key: 'offering', href: '/offering' },
		{ label: 'Contact Us', key: 'contact', href: '/#' },
		{ label: 'Sign In', key: 'signin', href: '/keystone/signin' }
	];
	
	res.locals.user = req.user;
	
	next();
	
});

keystone.pre('render', function(req, res, next) {
	
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	
	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length }) ? flashMessages : false;
	
	next();
	
});

keystone.set('404', function(req, res, next) {
	res.status(404).render('errors/404');
});

// Load Routes
var routes = {
	//api: importRoutes('./api'),
	download: importRoutes('./download'),
	views: importRoutes('./views')
};

exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.all('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);
	app.all('/offering', routes.views.offering);
	app.all('/homepage', routes.views.homepage);
	app.all('/companyprofile', routes.views.companyprofile);
	app.all('/mangementteam', routes.views.mangementteam);
	app.all('/differentiator', routes.views.differentiator);
	app.all('/career', routes.views.career);
	app.all('/contactlist', routes.views.contactlist);
	app.all('/partner', routes.views.partner);
	app.get('/softwareproduct', routes.views.softwareproduct);
	app.get('/consultingservice', routes.views.consultingservice);
	app.get('/msp',routes.views.msp);
	app.get('/specializedanalyse',routes.views.specializedanalyse);
	app.get('/technologyresale', routes.views.technologyResale);
	app.get('/navbar', routes.views.navbar);
	app.get('/menu',routes.views.menu);
	app.get('/listingmenu',routes.views.listingmenu);
	app.get('/companyinfolistmenu',routes.views.companyinfolistmenu);
	app.get('/footer',routes.views.footer);
	app.get('/message',routes.views.message);
	
	// Downloads
	app.get('/download/users', routes.download.users);
	
	// API
	//app.all('/api*', keystone.initAPI);

}
