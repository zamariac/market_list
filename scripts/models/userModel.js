var Backbone = require('backparse')({
	appId:'rBGHrQgZziXcV3fjqpuzIU3ap9x4obKgHxUtDXw4',
	apiKey:'rzM8F0vM2en7pPzadhD0H0FA3JsZaQAlKItfgbM3',
	apiVersion: 1

});

Backbone.$ = require('jquery');
var validator = require('validator')

module.exports = Backbone.Model.extend({
	defaults: {
		email: null,
		password: null,
		businessName:null,
		address: null,
		businessType: null,
		imageId: null,
	}

	parseClassName: '_User',
	idAttribute: 'objectId',
	isUser: true,
	save: function(key, val, options){
		this.unset('confirmPassword');
		return Backbone.Model.prototype.save.call(this, key, val, options);
	}
});