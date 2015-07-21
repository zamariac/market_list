var React = require('react');
var Backbone = require('backbone');

var Home = require('./components/homePageComponent');
var SignUp = require('./components/signUpComponent');
		filepicker.setKey("A6o1LvSOGRPGGwCAWAvQLz");
		
var VendorProfile = require('./components/vendorProfileComponent');
var LogIn= require('./components/logInComponent');
var FindMarket= require('./components/findMarketComponent');

var userModel = require('./models/userModel');


var user = new userModel();

var App = Backbone.Router.extend({
	routes:{
		'': 'home',
		'home':'home',
		'signup':'signup',
		'vendorprofile':'vendorprofile',
		'login':'login',
		'findmarket':'findmarket',
	},


	home: function(){
		React.render(<Home/>,document.querySelector('#container'));
	},

	signup: function(){
		React.render(<SignUp router={app} user={user}/>,document.querySelector('#container'));
	},

	vendorprofile: function(){
		React.render(<VendorProfile user={user}/>,document.querySelector('#container'));

	},

	login: function(){
		React.render(<LogIn router={app} user={user}/>,document.querySelector('#container'));
	},

	findmarket: function(){
		React.render(<FindMarket/>,document.querySelector('#container'));
	},


});

var app = new App();
Backbone.history.start();
// app.navigate('home')