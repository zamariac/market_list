var React = require('react');
var Backbone = require('backbone');

var Home = require('./components/homePageComponent');
var SignUp = require('./components/signUpComponent');
var VendorProfile = require('./components/vendorProfileComponent');

var userModel = require('./models/userModel');


var user = new userModel();

var App = Backbone.Router.extend({
	routes:{
		'': 'home',
		'home':'home',
		'signup':'signup',
		'vendorProfile':'vendorProfile'
	},


	home: function(){
		React.render(<Home/>,document.querySelector('#container'));
	},

	signup: function(){
		React.render(<SignUp/>,document.querySelector('#container'));
	},

	vendorProfile: function(){
		console.log('vendorProfile')
		React.render(<VendorProfile/>,document.querySelector('#container'));

	},





});

var app = new App();
Backbone.history.start();
// app.navigate('home')