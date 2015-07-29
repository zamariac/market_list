var React = require('react');
var Backbone = require('backbone');

var Home = require('./components/homePageComponent');
var SignUp = require('./components/signUpComponent');
		filepicker.setKey("A6o1LvSOGRPGGwCAWAvQLz");
		
var VendorProfile = require('./components/vendorProfileComponent');
var LogIn= require('./components/logInComponent');
var FindMarket= require('./components/findMarketComponent');
var EditProfile= require('./components/editProfileComponent');
var FoundMarket= require('./components/foundMarketComponent');

var userModel = require('./models/userModel');
var userCollection = require('./collections/userCollection');


var user = new userModel();
user.me();

var postMarketLocation = (<FoundMarket vendors={vendors} />);
var vendors = new userCollection();

// vendors.on('findLocation', function() {
// 	console.log('findLocation event');
// 	React.render(postMarketLocation, '#container');
// });



var App = Backbone.Router.extend({
	routes:{
		'': 'home',
		'home':'home',
		'signup':'signup',
		'vendorprofile':'vendorprofile',
		'login':'login',
		'findmarket':'findmarket',
		'foundmarket/:vendorLocation':'foundmarket',
		'editprofile':'editprofile'

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

	foundmarket: function(vendorLocation){
		console.log('foundmarket', vendorLocation);
		vendors.fetch({
			query: {
				vendorLocation:vendorLocation
			
			},
			success: function() {
				console.log(vendors);
			}
		});
		React.render(<FoundMarket vendors={vendors} router={app} user={user}/>,document.querySelector('#container'));
	},


	editprofile: function(){
		React.render(<EditProfile router={app} user={user}/>,document.querySelector('#container'));
	}


});

var app = new App();
Backbone.history.start();
// app.navigate('home')