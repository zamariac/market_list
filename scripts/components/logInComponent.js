var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');
var validator = require('validator');

var userModel = require('../models/userModel');


module.exports = React.createClass({
		getInitialState: function(){
			return {
				errors:{}
			}
		},
	render: function(){
		var genericError = null;
		if (this.state.errors.generic) {
			genericError = (<div className="alert alert-danger" role="alert">{this.state.errors.generic}</div>);
		}
		return (
			<div className="signupForm" ref="loginPage" onSubmit = {this.login}>
				<div>
						<div className="headerwrap"> 
							<a href="#home" className="homeButton"> Home </a>
							<div className="homehead"> Market List </div> 

						</div>
				</div>
				<div className="loginBlock">
					{genericError}
				<form className="form-horizontal" onSubmit={this.onLogin}>
		  				<div className="form-group">
		    				<label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
		    				<div className="col-sm-10">
		      					<input type="email" className="form-control inputEmail3" ref="loginEmail" placeholder="Email"/>
		      					<div className='errors'>{this.state.errors.loginEmail}</div> 
		    				</div>

		  				</div>
		 			 	<div className="form-group">
		    					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
		    				<div className="col-sm-10">
		      					<input type="password" className="form-control inputPassword3" ref="loginPassword" placeholder="Password"/>
		      					<div className='errors'>{this.state.errors.loginPassword}</div> 
		   				    </div>
		  				</div>
		  				
					  <div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10">
					      <button type="submit" className="btn btn-default">Sign in</button>
					    </div>
					  </div>
				</form>
				</div>
				<div className="bottomline"></div>
			</div>

		)
	},

	hasError: function(errors){
		for (var i in errors){
				if(errors[i]){
					return true;
				}
		}
		return false;
	},

	login: function(e){
		e.preventDefault()
		var self = this;
		var login = {
			username: this.refs.loginEmail.getDOMNode().value,
			password: this.refs.loginPassword.getDOMNode().value,
		};

		var errors = this.getInitialState().errors;

		if(!login.username){
			errors.loginEmail = 'Please enter an email address';
		}
		 else if (!validator.isEmail(login.username)){
		 	errors.loginEmail = 'This looks like an invalid email address';
		 }
		if(!login.password){
			errors.loginPassword = 'Please enter a password';
		} 

		this.setState({errors:errors});

		if(!this.hasError(errors)){
			this.props.user.login(login,{
				success: function(userModel){
					self.props.router.navigate('vendorprofile', {trigger:true});
				},

				error: function(userModel, response){
					self.setState({generic: response.responseJSON.error});
				}
			});
		}


	}


});