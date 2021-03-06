var Backbone = require('backparse')({
	appId:'rBGHrQgZziXcV3fjqpuzIU3ap9x4obKgHxUtDXw4',
	apiKey:'rzM8F0vM2en7pPzadhD0H0FA3JsZaQAlKItfgbM3',
	apiVersion: 1

});

Backbone.$ = require('jquery');
var validator = require('validator');

module.exports = Backbone.Model.extend({
	defaults: {
		username: null,
		password: null,
		vendorPasswordConfirm: null,
		vendorName:null,
		vendorContact:null,
		vendorLocation: null,
		vendorDescription: null,
		vendorType: null,
		vendorPhoto: null,
	},

	parseClassName: '_User',
	idAttribute: 'objectId',
	isUser: true,
	save: function(key, val, options){
		this.unset('confirmPassword');
		if (this.id){
			this.unset('password');
		}
		return Backbone.Model.prototype.save.call(this, key, val, options);
	}
});
