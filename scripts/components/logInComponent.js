var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');

var userModel = require('../models/userModel');


module.exports = React.createClass({
	render: function(){
		return (
			<div className="signupForm" ref="loginPage" onSubmit = {this.login}>
				<div>
						<div className="headerwrap"> 
							<a href="#home" className="homeButton"> Home </a>
							<div className="homehead"> Market List </div> 

						</div>
				</div>
				<div className="loginBlock">
				<form className="form-horizontal">
		  				<div className="form-group">
		    				<label for="inputEmail3" className="col-sm-2 control-label">Email</label>
		    				<div className="col-sm-10">
		      					<input type="email" className="form-control inputEmail3" ref="loginEmail" placeholder="Email"/>
		    				</div>
		  				</div>
		 			 	<div className="form-group">
		    					<label for="inputPassword3" className="col-sm-2 control-label">Password</label>
		    				<div className="col-sm-10">
		      					<input type="password" className="form-control inputPassword3" ref="loginPassword" placeholder="Password"/>
		   				    </div>
		  				</div>
		  				
					  <div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10">
					      <button type="submit" className="btn btn-default">Sign in</button>
					    </div>
					  </div>
					  <div className="error" ref="loginError"></div>
				</form>
				</div>
				<div className="bottomline"></div>
			</div>

		)
	},

	login: function(e){
		e.preventDefault()
		var self = this;
		var currentUser = new UserModel({
			vendorEmail: this.refs.loginEmail.getDOMNode().value,
			vendorPassword: this.refs.loginPassword.getDOMNode().value,
		});

		if(currentUser.isValid()) {
			$.post(
				'#login',
				currentUser.attributes
				)

			.success(function(user){
				App.navigate('#vendorprofile', {trigger:true});
				console.log('success');
			})
			.error(function(error){
				console.log('get error')
			self.refs.loginError.getDOMNode().innerHTML = error.responseJSON.error;
		})
		}
		else {
			console.log('js error');
			this.refs.loginError.getDOMNode().innerHTML = currentUser.validationError;
		}
	}


});