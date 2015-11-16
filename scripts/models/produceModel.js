var Backbone = require('backparse')({
	appId:'rBGHrQgZziXcV3fjqpuzIU3ap9x4obKgHxUtDXw4',
	apiKey:'rzM8F0vM2en7pPzadhD0H0FA3JsZaQAlKItfgbM3',
	apiVersion: 1

});

Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		produceName: null,
		produceWeight: null,
		producePrice: null,

		
	},

});