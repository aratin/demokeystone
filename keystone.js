// Load .env for development environments
require('dotenv')().load();

var keystone = require('keystone');

/**
 * Application Initialisation
 */
console.log("keystone.js started");
keystone.init({
	
	'name': 'Visual intelligence',
	'brand': 'Demo',
	
	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': 'public',
	
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://shridhar.malagi@clariontechnologies.co.in:Clarion~1@ds047911.mongolab.com:47911/heroku_app34312707',
	
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'demo',
	
	'ga property': process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN,
	
	'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	'chartbeat domain': process.env.CHARTBEAT_DOMAIN
	
});

require('./models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga_property: keystone.get('ga property'),
	ga_domain: keystone.get('ga domain'),
	chartbeat_property: keystone.get('chartbeat property'),
	chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

keystone.set('cloudinary config', { cloud_name: 'clarion', api_key: '958126136135894', api_secret: 'hwf2l0DwEJaDtMZyEi7BTF34U58' });
// or
keystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );
 
// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', 'keystone');
 
// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);
 
// optional, will force cloudinary to serve images over https
keystone.set('cloudinary secure', true);

keystone.set('mandrill api key', '_nmfkAwalFdbxh_1dgarHQ');
keystone.set('mandrill username', 'arati.nankar@planetria.com');

keystone.set('nav', {
	'posts': ['posts', 'post-comments', 'post-categories'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users',
	'field-tests': 'things'
});


keystone.start();
