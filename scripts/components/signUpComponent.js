var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');

var userModel = require('../models/userModel');


module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors:{}
		};
	},
	render: function(){
		return(
			<form onSubmit={this.registerSubmit}>

				<div className="headerwrap"> 
					<a href="#home" className="homeButton"> Home </a>
					<div className="marginTop"></div>
					<div className="homehead"> Market List </div> 
				</div>
				<div className="container">
					<div className="row">
  							<div className="col-sm-4"> 
								<div ref="vendorPhoto"className="vendorPhoto"><img src={this.state.picture}/></div>
								<span className="errors">{this.state.errors.vendorPhoto}</span>

								<button onClick={this.pickPhoto} className="photoButton" type="button"> Upload Logo</button>
  							</div>
  							<div className="col-sm-4">
  								<input type="text" ref="vendorName" className="vendorName" placeholder="Vendor Name"/>
										<span className="errors">{this.state.errors.vendorName}</span>
  								<input type="text" ref="vendorContact" className="vendorContact" placeholder="Person of Contact"/>
										<span className="errors">{this.state.errors.vendorContact}</span>
  								<input type="text" ref="vendorPassword" className="vendorPassword" placeholder="Enter a Password"/>
										<span className="errors">{this.state.errors.vendorPassword}</span>
								<input type="text" ref="vendorPasswordConfirm" className="vendorPasswordConfirm" placeholder="Confirm Password"/>
										<span className="errors">{this.state.errors.vendorPasswordConfirm}</span>
  							</div>
  							<div className="col-sm-4">
  									<div className="scroll"> Business
										<select ref="vendorType">
										<option value="1">Type</option>
					    				<option value="2">Vegetables</option>
					    				<option value="3">Meat Eggs & Dairy</option>
					    				<option value="4">Artisan Food</option>
					    				<option value="5">Miscellany Goods</option>
										</select>
									<span className="errors">{this.state.errors.typescroll}</span>
									</div>
								<input type="text" ref="vendorEmail" className="vendorEmail" placeholder="Email"/>
										<span className="errors">{this.state.errors.vendorEmail}</span>
								<div className="scroll"> Market
										<select ref="vendorLocation"> 
										<option value="1">Location</option>
					    				<option value="2">Hope FM</option>
					    				<option value="3">Lakeline TFM</option>
					    				<option value="4">Domain TFM</option>
					    				<option value="5">Mueller TFM</option>
					    				<option value="6">All of the above</option>
										</select>
									<span className="errors">{this.state.errors.locationScroll}</span>
									</div>
  							</div>
  							<div className="row">
  							<span className="errors">{this.state.errors.servererror}</span>
  							<textarea ref="vendorDescription" className="vendorDescription" placeholder="Business description"></textarea>
										<span className="errors">{this.state.errors.vendorDescription}</span>
											<button className="createUser">Submit</button>
							</div>
  					</div>

				</div>
				<div className="bottomline"> </div>
			</form>
			);
	},

	pickPhoto: function(e){
		var self = this;

		console.log('hello')
		filepicker.pickAndStore(
			{
				mimetype:"image/*"
			},
			{},
			function(response){
				console.log(response);
				// self.setState({
				// 	avatarUrl: InkBlobs[0].url
				// });
				self.setState({picture:response[0].url})
			}
		);

	},

	registerSubmit: function(e){
		e.preventDefault();

		var self = this;
		var err = {};
		var user = new userModel({
			vendorName: this.refs.vendorName.getDOMNode().value,
			username: this.refs.vendorEmail.getDOMNode().value,
			password: this.refs.vendorPassword.getDOMNode().value,
			vendorPasswordConfirm: this.refs.vendorPasswordConfirm.getDOMNode().value,
			vendorContact: this.refs.vendorContact.getDOMNode().value, 
			vendorLocation: this.refs.vendorLocation.getDOMNode().value,
			vendorType: this.refs.vendorType.getDOMNode().value,
			vendorDescription: this.refs.vendorDescription.getDOMNode().value,
			


		});


		if(!user.get('vendorName') || !user.get('password') || !user.get('username') || !user.get('vendorPasswordConfirm')
		|| !user.get('vendorContact')|| !user.get('vendorLocation')|| !user.get('vendorDescription')|| !user.get('vendorType')){

			if(!user.get('vendorName')){
				err.vendorName = 'You must enter a vendor name';
			}
			if(!user.get('username')){
				err.vendorEmail = 'You must enter a vendor Email';
			}
			if(!user.get('password')){
				err.vendorPassword = 'You must enter a Password';
			}
			if(!user.get('vendorPasswordConfirm')){
				err.vendorPasswordConfirm = 'You must confirm Password';
			}
			if(!user.get('vendorContact')){
				err.vendorContact = 'You must enter a vendor contact';
			}
			if(!user.get('vendorDescription')){
				err.vendorDescription = 'You must enter a vendor description';
			}
			if(!user.get('vendorLocation === 1')){
				err.vendorLocation = 'You must choose your location';
			}
			if(!user.get('vendorType === 1')){
				err.vendorLocation = 'You must choose your a business type';
			}

			this.setState({errors:err});

		} else {
			user.save(null, {
				success:function(){
					self.props.router.navigate('vendorprofile', {trigger: true});
				},

				error: function(userModel,response){
					self.setState({
						errors: {servererror:response.responseJSON.error
						}
					});
				}

			});
			
		}
		console.log(err)

		
	}


})