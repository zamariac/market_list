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

				<div className="headerwraphome"> 
					<a href="#home" className="homeButton"> Home </a>
					<div className="marginTop"></div>
					<a href="#home" className="homeheadhome"> MARKET LIST </a> 
				</div>
				<div className="container">
					<div className="row">
  							<div className="col-sm-4"> 
								<div ref="vendorPhoto" className="vendorPhoto"><img src={this.state.vendorPhoto}/></div>
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
					    				<option value="2">Fruit & Vegetables</option>
					    				<option value="3">Meat Eggs & Dairy</option>
					    				<option value="4">Artisan Food</option>
					    				<option value="5">Miscellany Goods</option>
										</select>
									<span className="errors">{this.state.errors.vendorType}</span>
									</div>
								<input type="text" ref="vendorEmail" className="vendorEmail" placeholder="Email"/>
										<span className="errors">{this.state.errors.vendorEmail}</span>
								<div className="scroll"> Market
										<select ref="vendorLocation"> 
										<option value="1">Location</option>
					    				<option value="hope">Hope FM</option>
					    				<option value="lakeline">Lakeline TFM</option>
					    				<option value="domain">Domain TFM</option>
					    				<option value="mueller">Mueller TFM</option>
					    				<option value="all">All of the above</option>
										</select>
									<span className="errors">{this.state.errors.vendorLocation}</span>
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
				cropRatio: 1,
				mimetype:"image/*"
			},
			{},
			function(response){
				console.log(response);
				// self.setState({
				// 	avatarUrl: InkBlobs[0].url
				// });
				self.setState({vendorPhoto:response[0].url})
			}
		);

	},

	registerSubmit: function(e){
		e.preventDefault();

		var self = this;
		var err = {};
	
		var user = this.props.user;
		user.logout();
		user.set({
			vendorName: this.refs.vendorName.getDOMNode().value,
			username: this.refs.vendorEmail.getDOMNode().value,
			password: this.refs.vendorPassword.getDOMNode().value,
			vendorPasswordConfirm: this.refs.vendorPasswordConfirm.getDOMNode().value,
			vendorContact: this.refs.vendorContact.getDOMNode().value, 
			vendorLocation: this.refs.vendorLocation.getDOMNode().value,
			vendorType: this.refs.vendorType.getDOMNode().value,
			vendorDescription: this.refs.vendorDescription.getDOMNode().value,
			vendorPhoto: this.state.vendorPhoto,

		});
		 	console.log(user)


		if(!user.get('vendorName') || !user.get('password') || !user.get('username') || !user.get('vendorPasswordConfirm')
		|| !user.get('vendorContact')|| user.get('vendorLocation')=== '1'|| !user.get('vendorDescription')|| user.get('vendorType')==='1'){

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
			if(user.get('vendorLocation') === '1'){
				err.vendorLocation = 'You must choose your location';
			}
			if(user.get('vendorType') === '1'){
				err.vendorType = 'You must choose your a business type';
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