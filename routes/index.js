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
		//{ label: 'Sign In', key: 'signin', href: '/keystone/signin' }
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
	app.all('/companyprofile', routes.views.companyprofile);
	app.get('/companyinfolistmenu',routes.views.companyinfolistmenu);
	app.all('/mangementteam', routes.views.mangementteam);
	app.all('/differentiator', routes.views.differentiator);

	// Downloads
	app.get('/download/users', routes.download.users);
	
	// API
	//app.all('/api*', keystone.initAPI);

}
