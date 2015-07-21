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
					<div className="homehead"> Market List </div> 
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
		      					<input type="vendorNameProfile" className="form-control" ref=""/>
		    				</div>
		    				<div>
  								<label htmlFor="vendorDescription" className="col-sm-2 control-label">Vendor Description</label>
  							</div>
		    				<div className="col-sm-10">
		      					<input type="vendorDescription" className="form-control" ref=""/>
		    				</div>				
  					</div>
  					
  					<div className="row">
  						<textarea ref="vendorDescription" className="vendorDescription" placeholder="Business description"></textarea>				
					</div>
				</div>
				<div className="bottomline"></div>
		</form>
	
			);
	}

	


});