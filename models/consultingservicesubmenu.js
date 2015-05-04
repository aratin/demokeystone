var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Consultingservicesubmenu = new keystone.List('Consultingservicesubmenu', {
	autokey: { from: 'name', path: 'key' }
});

Consultingservicesubmenu.add({
	datawarehouse:{type:String},
	visualbusiness:{type:String},
	predictivemodeling:{type:String},
	comparativebenchmarking:{type:String},
	geospaticalanalytics:{type:String},
	ecommerceportal:{type:String},
	businessprocessstrategy:{type:String},
	informationreporting:{type:String},
	socialmedia:{type:String},
});

Consultingservicesubmenu.addPattern('standard meta');
Consultingservicesubmenu.register();

       