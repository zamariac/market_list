var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');

var userModel = require('../models/userModel');


module.exports = React.createClass({
	render: function(){
		console.log(this.props.user)
		return (
		<form>
				<div className="headerwrap"> 
					<a href="#editmarketlist" className="editmarketlistButton"> Edit your list </a>
					<a href="#editprofile" className="editprofileButton"> Edit Profile </a>
					<div className="marginTop"></div>
					<a href="#home" className="homeheadhome"> MARKET LIST </a>  
				</div>
				<div className="container">
					<div className="row">
  							<div className="col-sm-4"> 
								<div ref="vendorPhoto"className="vendorPhoto"><img src={this.props.user.get('vendorPhoto')}/></div>
							</div>
							<div>
  								<label htmlFor="vendorNameProfile" className="col-sm-2 control-label" placeholder="Vendor Name"></label>
  							</div>
		    				<div className="col-sm-10">
		      					<input type="vendorNameProfile" className="form-control" defaultValue={this.props.user.get('vendorName')}/>
		    				</div>			
  					</div>
  					
  					<div className="row">
  						<textarea ref="vendorDescription" className="vendorDescription" defaultValue={this.props.user.get('vendorName')}></textarea>				
					</div>
				</div>
				<div className="bottomline"></div>
		</form>
	
			);
	}

	


});