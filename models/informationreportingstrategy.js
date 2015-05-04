var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Informationreportingstrategy = new keystone.List('Informationreportingstrategy', {
	autokey: { from: 'name', path: 'key' }
});

Informationreportingstrategy.add({
	text:{type:String},
	subText:{type:String}, 
	shortString:{type:String},
	longString:{type:String},
	
});

/** 
	Registration
	============
*/
Informationreportingstrategy.addPattern('standard meta');
Informationreportingstrategy.register();