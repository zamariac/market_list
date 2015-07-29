var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');

var userModel = require('../models/userModel');

module.exports = React.createClass({
	componentWillMount: function(){
		var self = this;
		this.props.user.on("change", function(){
			self.refs.vendorName.getDOMNode().value = self.props.user.get('vendorName');
	 		self.refs.vendorEmail.getDOMNode().value = self.props.user.get('username');
			self.refs.vendorContact.getDOMNode().value = self.props.user.get('vendorContact');
			self.refs.vendorLocation.getDOMNode().value = self.props.user.get('vendorLocation');
			self.refs.vendorType.getDOMNode().value = self.props.user.get('vendorType');
			self.refs.vendorDescription.getDOMNode().value = self.props.user.get('vendorDescription');
			
			self.setState({vendorPhoto:self.props.user.get('vendorPhoto')})

			// self.forceUpdate();
		})
	},
	getInitialState: function(){
		return {
			errors:{}
		};
	},
	render: function(){
		console.log('render', this.props.user.toJSON());
		return(
			<form onSubmit={this.editSubmit}>

				<div className="headerwrap"> 
					<a href="#home" className="homeButton"> Home </a>
					<div className="marginTop"></div>
					<div className="homehead"> Market List </div> 
				</div>
				<div className="container">
					<div className="row">
  							<div className="col-sm-4"> 
								<div ref="vendorPhoto" className="vendorPhoto"><img src={this.state.vendorPhoto}/></div>
								<button onClick={this.pickPhoto} className="photoButton" type="button"> Upload Logo</button>
  							</div>
  							<div className="col-sm-4">
  								<input type="text" ref="vendorName" className="vendorName" placeholder="Vendor Name" defaultValue={this.props.user.get('vendorName')}/>
									<span className="errors">{this.state.errors.vendorName}</span>	
  								<input type="text" ref="vendorContact" className="vendorContact" placeholder="Person of Contact" defaultValue={this.props.user.get('vendorContact')}/>
									<span className="errors">{this.state.errors.vendorContact}</span>
  								<input type="text" ref="vendorPassword" className="vendorPassword" placeholder="Enter a Password"/>
									
								<input type="text" ref="vendorPasswordConfirm" className="vendorPasswordConfirm" placeholder="Confirm Password"/>
										
  							</div>
  							<div className="col-sm-4">
  									<div className="scroll"> Business
										<select ref="vendorType" defaultValue={this.props.user.get('vendorType')}>
										<option value="1">Type</option>
					    				<option value="2">Fruit & Vegetables</option>
					    				<option value="3">Meat Eggs & Dairy</option>
					    				<option value="4">Artisan Food</option>
					    				<option value="5">Miscellany Goods</option>
										</select>
									<span className="errors">{this.state.errors.vendorType}</span>

									
									</div>
								<input type="text" ref="vendorEmail" className="vendorEmail" placeholder="Email" defaultValue={this.props.user.get('username')} />
										
								<div className="scroll"> Market
										<select ref="vendorLocation" defaultValue={this.props.user.get('vendorLocation')}> 
										<option value="1">Location</option>
					    				<option value="2">Hope FM</option>
					    				<option value="3">Lakeline TFM</option>
					    				<option value="4">Domain TFM</option>
					    				<option value="5">Mueller TFM</option>
					    				<option value="6">All of the above</option>
										</select>
									<span className="errors">{this.state.errors.vendorLocation}</span>
									
									</div>
  							</div>
  							<div className="row">
  							
  							<textarea ref="vendorDescription" className="vendorDescription" defaultValue={this.props.user.get('vendorDescription')}></textarea>
										
											<button className="createUser">Save</button>
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

	profileChanged: function(){},

	editSubmit: function(e){
		e.preventDefault();

		var self = this;
		var err = {};

		console.log(this.props.user);
		this.props.user.set({vendorName: this.refs.vendorName.getDOMNode().value});
		console.log(this.props.user);
		// this.props.user.save(null, {
		// 	success:function(){
		// 		// self.props.router.navigate('vendorprofile', {trigger: true});
		// 	},

		// 	error: function(userModel,response){
		// 		self.setState({
		// 			errors: {servererror:response.responseJSON.error
		// 			}
		// 		});
		// 	}

		// });

		this.props.user.set({
			vendorName: this.refs.vendorName.getDOMNode().value,
			username: this.refs.vendorEmail.getDOMNode().value,
			vendorContact: this.refs.vendorContact.getDOMNode().value, 
			vendorLocation: this.refs.vendorLocation.getDOMNode().value,
			vendorType: this.refs.vendorType.getDOMNode().value,
			vendorDescription: this.refs.vendorDescription.getDOMNode().value,
			vendorPhoto: this.state.vendorPhoto,
		});

	if(! this.props.user.get('vendorName')|| !this.props.user.get('username')|| !this.props.user.get('vendorContact')
	|| this.props.user.get('vendorLocation')=== '1'|| !this.props.user.get('vendorDescription')|| this.props.user.get('vendorType')==='1'){

			if(!this.props.user.get('vendorName')){
				err.vendorName = 'You must enter a vendor name';
			}
			if(!this.props.user.get('username')){
				err.vendorEmail = 'You must enter a vendor Email';
			}
			if(!this.props.user.get('vendorContact')){
				err.vendorContact = 'You must enter a vendor contact';
			}
			if(!this.props.user.get('vendorDescription')){
				err.vendorDescription = 'You must enter a vendor description';
			}
			if(this.props.user.get('vendorLocation') === '1'){
				err.vendorLocation = 'You must choose your location';
			}
			if(this.props.user.get('vendorType') === '1'){
				err.vendorType = 'You must choose your a business type';
			}

			this.setState({errors:err});

		} else {
			console.log(this.refs.vendorName.getDOMNode().value);
			console.log(this.props.user.toJSON());
			this.props.user.save(null, {
				success:function(){
					// self.props.router.navigate('vendorprofile', {trigger: true});
				},

				error: function(userModel,response){
					self.setState({
						errors: {servererror:response.responseJSON.error
						}
					});
				}

			});
			
		}
	// 	// console.log(err)

		
	}


})