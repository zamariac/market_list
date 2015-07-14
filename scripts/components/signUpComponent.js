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
				<a href="#home" className="homeButton"> Home </a>
				<div className="headerwrap"> 
					<div className="marginTop"></div>
					<div className="homehead"> Market List </div> 
				</div>
				<div className="container">
					<div className="row">
  							<div className="col-sm-4"> 
								<div ref="vendorPhoto"className="vendorPhoto">photo here</div>
								<span className="errors">{this.state.errors.vendorPhoto}</span>
								<button className="photoButton"> Upload Logo</button>
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
  									<div ref="scroll" className="scroll"> Business
										<select>
										<option value="1">Type</option>
					    				<option value="2">Vegetables</option>
					    				<option value="3">Meat Eggs & Dairy</option>
					    				<option value="4">Artisan Food</option>
					    				<option value="5">Miscellany Goods</option>
										</select>
									<span className="errors">{this.state.errors.scroll}</span>
									</div>
								<input type="text" ref="vendorEmail" className="vendorEmail" placeholder="Email"/>
										<span className="errors">{this.state.errors.vendorEmail}</span>
								<input type="text" ref="vendorAddress" className="vendorAddress"placeholder="Address"/>
										<span className="errors">{this.state.errors.vendorAddress}</span>

  							</div>
  							<div className="row">
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

	registerSubmit: function(e){
		e.preventDefault();

		var err = {};
		var user = new userModel({
			vendorName: this.refs.vendorName.getDOMNode().value,
			vendorEmail: this.refs.vendorEmail.getDOMNode().value,
			vendorPassword: this.refs.vendorPassword.getDOMNode().value,
			vendorPasswordConfirm: this.refs.vendorPasswordConfirm.getDOMNode().value,
			vendorContact: this.refs.vendorContact.getDOMNode().value, 
			vendorAddress: this.refs.vendorAddress.getDOMNode().value,
			vendorDescription: this.refs.vendorDescription.getDOMNode().value,


		});


		if(!user.get('vendorName') || !user.get('vendorPassword') || !user.get('vendorEmail') || !user.get('vendorPasswordConfirm')
			|| !user.get('vendorContact')|| !user.get('vendorAddress')|| !user.get('vendorDescription')){

			if(!user.get('vendorName')){
				err.vendorName = 'You must enter a vendor name';
			}
			if(!user.get('vendorEmail')){
				err.vendorEmail = 'You must enter a vendor Email';
			}
			if(!user.get('vendorPassword')){
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
			if(!user.get('vendorAddress')){
				err.vendorAddress = 'You must enter an address';
			}

		} else {
			user.save();
			app.navigate('vendorProfile', {trigger: true});
		}
		console.log(err)

		this.setState({errors:err});
	}


})