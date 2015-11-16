var Backbone = require('backparse')({
	appId:'rBGHrQgZziXcV3fjqpuzIU3ap9x4obKgHxUtDXw4',
	apiKey:'rzM8F0vM2en7pPzadhD0H0FA3JsZaQAlKItfgbM3',
	apiVersion: 1

});
var produceModel = require('../models/produceModel');

module.exports = Backbone.Collection.extend({
	model: produceModel,
	parseClassName: '_Produce'
});