var React = require('react');
var Backbone = require('backbone');

var Home = require('./components/homePageComponent');

var App = Backbone.Router.extend({
	routes:{
		'': 'home',
		'home':'home'
	},


	home: function(){
		React.render(<Home/>,document.querySelector('#container'));
	},





});

var app = new App();
Backbone.history.start();
app.navigate('home')